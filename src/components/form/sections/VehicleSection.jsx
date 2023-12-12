import { useContext } from 'react';
import FormContext from '../../../context/form/FormContext';
import Input from '../elements/Input';

const VehicleSection = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className='flex flex-col items-center sm:flex-row sm:items-center justify-between'>
      {/* flex ekledim */}
      <p className='font-medium text-xl -tracking-2 mb-4 sm:mb-0'>
        İş Aracı Hakkında Bilgiler
      </p>
      <div className='flex flex-col sm:flex-row gap-8'>
        {/* flex ekledim ve width sildim */}
        <Input
          title='Araç Tipi'
          altTitle='Araç tipini giriniz'
          inputType='carTypeInput'
          dispatch={dispatch}
        />
        {/* flex ekledim ve width sildim */}
        <Input
          title='Adres*'
          altTitle='Adresinizi giriniz'
          inputType='addressInput'
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default VehicleSection;
