import { useEffect, useState } from 'react';

import { setBackgroundColorWhite } from '../../utils/BackgroundColorUtils';
import { resetLocation } from '../../utils/ScrollUtils';

import Input from '../../components/form/elements/Input';
import TextArea from '../../components/form/elements/TextArea';
import FormHeader from '../../components/form/FormHeader';
import SubmitButton from '../../components/form/elements/SubmitButton';

const FoodAidForm = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const formHeaderTitle = 'Gıda Yardımı Formu';
  const descriptionText = (
    <p>
      Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra sizinle
      iletişime geçilecektir.
    </p>
  );

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title={formHeaderTitle} description={descriptionText} />
      <div className='my-16'>
        <form className='flex flex-col'>
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
                    inputType='nameInput'
                    // dispatch={dispatch}
                  />
                  <Input
                    title='Soyisim'
                    altTitle='Soyisminizi giriniz'
                    inputType='surnameInput'
                    // dispatch={dispatch}
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap-8'>
                  <Input
                    title='Telefon Numarası*'
                    altTitle='Telefon numaranızı giriniz'
                    inputType='phoneNumberInput'
                    // dispatch={dispatch}
                  />
                  <Input
                    title='E-posta Adresi'
                    altTitle='E-posta adresinizi giriniz'
                    inputType='emailInput'
                    // dispatch={dispatch}
                  />
                </div>
              </div>
            </div>
            <hr className='my-8' />
            <div className='md:flex-row flex-col flex items-center md:justify-between'>
              <p className='font-medium text-xl -tracking-2 md:mb-0 mb-4'>
                {'Gıda Yardımı Hakkında Bilgiler'}
              </p>
              <TextArea
                title='Gıda Yardımı Hakkında Bilgiler'
                altTitle='Gıda hakkında ek bilgiler ekleyebilirsiniz'
                setState={setDescription}
              />
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

export default FoodAidForm;
