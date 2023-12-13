import { useEffect } from 'react';

import FormHeader from '../../components/form/FormHeader';
import Input from '../../components/form/elements/Input';
import { setBackgroundColorWhite } from '../../utils/BackgroundColorUtils';
import { resetLocation } from '../../utils/ScrollUtils';
import SubmitButton from '../../components/form/elements/SubmitButton';

const CreateOfficerForm = () => {
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

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title={'Görevli Oluştur'} description={descriptionText} />
      <div className='my-16 '>
        <form className='flex flex-col'>
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
                    inputType='nameInput'
                  />
                  <Input
                    title='Soyisim'
                    altTitle='Soyisminizi giriniz'
                    inputType='surnameInput'
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <Input
                    title='Doğum Tarihi'
                    altTitle='Doğum tarihini giriniz'
                    inputType='officerBirthdayInput'
                  />
                  <Input
                    title='Telefon Numarası*'
                    altTitle='Telefon numaranızı giriniz'
                    inputType='phoneNumberInput'
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                  <Input
                    title='Geldiği Şehir*'
                    altTitle='Görevlinin geldiği şehri giriniz'
                    inputType='officerComesFromInput'
                  />
                  <Input
                    title='Atandığı Bölge*'
                    altTitle='Görevlinin atandığı bölgeyi giriniz'
                    inputType='officerLocationInput'
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
    </div>
  );
};

export default CreateOfficerForm;
