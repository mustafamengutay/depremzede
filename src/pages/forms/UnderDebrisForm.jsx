import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setBackgroundColorWhite } from '../../utils/BackgroundColorUtils';
import { resetLocation } from '../../utils/ScrollUtils';

import Input from '../../components/form/elements/Input';
import SubmitButton from '../../components/form/elements/SubmitButton';
import FormHeader from '../../components/form/FormHeader';

import FormContext from '../../context/form/FormContext';

const UnderDebrisForm = () => {
  const { sendPost } = useContext(FormContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const formHeaderTitle = 'Tanıdığım Enkaz Altında Formu';
  const descriptionText = (
    <p>
      Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
      <span className='text-black'> Enkaz Altında Olanlar</span> bölümünde
      görünecektir.
    </p>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      name,
      surname,
      phoneNumber,
      email,
      address,
      numberOfPeople,
    };

    sendPost(post, '/users/enkaz-altinda');

    navigate('/form-gonderildi');
  };

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title={formHeaderTitle} description={descriptionText} />
      <div className='my-16'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div>
            <div className='flex justify-between items-center flex-col sm:flex-row'>
              <p className='font-medium text-xl -tracking-2 mb-4 sm:mb-0'>
                Kişisel Bilgiler
              </p>
              <div className='flex flex-wrap gap-7 justify-center sm:justify-end'>
                <div className='flex flex-col sm:flex-row gap-8'>
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
                <div className='flex flex-col sm:flex-row gap-8'>
                  <Input
                    title='Telefon Numarası*'
                    altTitle='Telefon numaranızı giriniz'
                    setState={setPhoneNumber}
                  />
                  <Input
                    title='E-posta Adresi'
                    altTitle='E-posta adresinizi giriniz'
                    setState={setEmail}
                  />
                </div>
              </div>
            </div>
            <hr className='my-8' />
            <div className='flex flex-col items-center sm:flex-row sm:items-center justify-between'>
              <p className='font-medium text-xl -tracking-2 mb-4 sm:mb-0'>
                Enkaz Bölgesi Hakkında Bilgiler
              </p>
              <div className='flex flex-col sm:flex-row gap-8'>
                <Input
                  title='Kişi Sayısı'
                  altTitle='Kişi sayısını giriniz'
                  inputType='numberOfPeopleInput'
                  setState={setNumberOfPeople}
                />
                <Input
                  title='Adres'
                  altTitle='Enkaz bölgesinin adresini giriniz'
                  inputType='addressInput'
                  setState={setAddress}
                />
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
    </div>
  );
};

export default UnderDebrisForm;
