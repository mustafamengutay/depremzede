import React, { useEffect, useState } from 'react';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import Input from '../components/form/elements/Input';
import CloseButton from '../components/layouts/CloseButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  return (
    <div className='h-screen mx-4 sm:mx-10 md:mx-20 lg:mx-35 my-[50px]'>
      <div className='mt-5 sm:mt-10 flex justify-end items-start'>
        <CloseButton />
      </div>
      <div className='flex justify-center items-center mt-10 sm:mt-20'>
        <form className='sm:w-96 lg:w-96 sm:border py-8 px-6 rounded-5 flex flex-col items-center'>
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
          <button className='w-48.5 h-10 text-base text-white rounded-xl bg-grey-1 hover:bg-black transition duration-300 ease-in-out'>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
