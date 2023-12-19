import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../../components/form/FormHeader';
import Input from '../../components/form/elements/Input';
import { setBackgroundColorWhite } from '../../utils/BackgroundColorUtils';
import { resetLocation } from '../../utils/ScrollUtils';
import SubmitButton from '../../components/form/elements/SubmitButton';

import FormContext from '../../context/form/FormContext';

const CreateOfficerForm = () => {
  const { sendPost } = useContext(FormContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  const [cameFrom, setCameFrom] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const descriptionText = (
    <p>
      Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra yeni
      görevliyi
      <span className='text-black'> Görevliler</span> bölümünden görebilirsiniz.
    </p>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOfficer = {
      name,
      surname,
      phoneNumber,
      email: `${name}${surname}@gmail.com`,
      dataOfBirth: dob,
      comeFromCity: cameFrom,
      resposibleFromCity: region,
      authorized: false,
    };

    sendPost(newOfficer, '/gorevli-olustur');

    navigate('/form-gonderildi');
  };

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title={'Görevli Oluştur'} description={descriptionText} />

      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div>
          <div className='flex justify-between items-center flex-col md:flex-row'>
            <p className='font-medium text-xl -tracking-2 mb-4 md:mb-0'>
              Kişisel Bilgiler
            </p>
            <div className='flex flex-wrap gap-7   justify-end   flex-col md:flex-row  '>
              <div className='flex flex-col md:flex-row gap-8'>
                <Input
                  title='İsim'
                  altTitle='İsminizi giriniz'
                  setState={setName}
                />
                <Input
                  title='Soyisim'
                  altTitle='Soyisminizi giriniz'
                  setState={setSurname}
                />
              </div>
              <div className='flex flex-col md:flex-row gap-8'>
                <Input
                  title='Doğum Tarihi'
                  altTitle='Doğum tarihini giriniz'
                  setState={setDob}
                />
                <Input
                  title='Telefon Numarası*'
                  altTitle='Telefon numaranızı giriniz'
                  setState={setPhoneNumber}
                />
              </div>
              <div className='flex flex-col md:flex-row gap-8'>
                <Input
                  title='Geldiği Şehir*'
                  altTitle='Görevlinin geldiği şehri giriniz'
                  setState={setCameFrom}
                />
                <Input
                  title='Atandığı Bölge*'
                  altTitle='Görevlinin atandığı bölgeyi giriniz'
                  setState={setRegion}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-72 my-12 self-end'>
          <p className='text-base -tracking-2 font-light'>
            *Bu alanlar zorunludur.
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default CreateOfficerForm;
