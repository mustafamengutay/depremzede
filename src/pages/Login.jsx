import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

import Input from '../components/form/elements/Input';
import CloseButton from '../components/layouts/CloseButton';

import FormContext from '../context/form/FormContext';
import AuthContext from '../context/auth/AuthContext';

const Login = () => {
  const { sendPost } = useContext(FormContext);
  const { setAuthorizedOfficer, setOfficerData, setAuthorizedManager } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const login = async () => {
      // TEMPORARY ADMIN
      if (email === 'admin' && password === 'admin') {
        setAuthorizedManager(true);
        localStorage.setItem('government', 'true');
        toast.success('Yönetici Girişi Başarılı! Yönlendiriliyorsunuz...');

        setTimeout(() => {
          navigate('/yonetici');
        }, 3000);
        return;
      }

      const isOfficerExist = await sendPost(user, '/officers/login');

      if (!isOfficerExist.success) {
        setLoginError(true);
        toast.error('Giriş Bilgileri Yanlış');
        return;
      }

      setAuthorizedOfficer(true);
      setOfficerData(isOfficerExist.data.officer);
      localStorage.setItem('officer', 'true');
      toast.success('Görevli Girişi Başarılı! Yönlendiriliyorsunuz...');

      setTimeout(() => {
        navigate('/gorevli');
      }, 3000);
    };

    login();
  };

  return (
    <div className='h-screen mx-4 sm:mx-10 md:mx-20 lg:mx-35 my-[50px]'>
      <div className='mt-5 sm:mt-10 flex justify-end items-start'>
        <CloseButton />
      </div>
      <div className='flex justify-center items-center mt-10 sm:mt-20'>
        <form
          className='sm:w-96 lg:w-96 sm:border py-8 px-6 rounded-5 flex flex-col items-center'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col gap-2 mb-12'>
            <h1 className='font-medium text-2xl'>Depremzede Giriş Paneli</h1>
            <p className='text-xs text-center text-grey-1'>
              Lütfen hesap bilgilerinizi giriniz.
            </p>
          </div>
          <div className='flex flex-col gap-6 mb-12'>
            <Input title='E-posta Adresi' setState={setEmail} />
            <Input title='Şifre' setState={setPassword} />
            <a
              className='text-xs text-right underline hover:text-stone-500'
              href='#'
            >
              Șifremi unuttum
            </a>
          </div>
          <button
            className='w-48.5 h-10 text-base text-white rounded-xl bg-grey-1 hover:bg-black transition duration-300 ease-in-out'
            type='submit'
          >
            Giriş Yap
          </button>
        </form>
      </div>
      <div>
        <Toaster expand visibleToasts={5} />
      </div>
    </div>
  );
};

export default Login;
