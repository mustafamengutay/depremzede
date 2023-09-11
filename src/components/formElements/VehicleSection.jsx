import { useContext } from 'react';
import Input from './Input';
import FormContext from '../../context/FormContext';

const VehicleSection = ({ firstInputWidth, secondInputWidth }) => {
  const {
    carTypeInputValue,
    setCarTypeInputValue,
    addressInputValue,
    setAddressInputValue,
  } = useContext(FormContext);

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
          value={carTypeInputValue}
          setValue={setCarTypeInputValue}
        />
        <Input
          title="Adres*"
          altTitle="Adresinizi giriniz"
          width={secondInputWidth}
          value={addressInputValue}
          setValue={setAddressInputValue}
        />
      </div>
    </div>
  );
};

export default VehicleSection;
