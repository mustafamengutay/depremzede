import { useContext } from 'react';
import Input from '../elements/Input';
import FormContext from '../../../context/form/FormContext';

const DebrisFieldSection = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className='flex flex-col items-center sm:flex-row sm:items-center justify-between'>
      {/* flex ekledim */}
      <p className='font-medium text-xl -tracking-2 mb-4 sm:mb-0'>
        Enkaz Bölgesi Hakkında Bilgiler
      </p>
      <div className='flex flex-col sm:flex-row gap-8'>
        {/* flex ekledim  ve fixed width sildim */}
        <Input
          title='Kişi Sayısı'
          altTitle='Kişi sayısını giriniz'
          inputType='numberOfPeopleInput'
          dispatch={dispatch}
        />
        {/* flex ekledim  ve fixed width sildim */}
        <Input
          title='Adres'
          altTitle='Enkaz bölgesinin adresini giriniz'
          inputType='addressInput'
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default DebrisFieldSection;
