import { useContext } from 'react';
import Input from './Input';
import FormContext from '../../context/form/FormContext';

const VehicleSection = ({ firstInputWidth, secondInputWidth }) => {
  const { carTypeInput, addressInput } = useContext(FormContext);

  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">
        İş Aracı Hakkında Bilgiler
      </p>
      <div className="flex gap-8">
        <Input
          title="Araç Tipi"
          altTitle="Araç tipini giriniz"
          width={firstInputWidth}
          inputType={carTypeInput}
          action={'SET_CAR_TYPE'}
        />
        <Input
          title="Adres*"
          altTitle="Adresinizi giriniz"
          width={secondInputWidth}
          inputType={addressInput}
          action={'SET_ADDRESS'}
        />
      </div>
    </div>
  );
};

export default VehicleSection;
