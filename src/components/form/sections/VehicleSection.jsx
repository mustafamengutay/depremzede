import { useContext } from 'react';
import FormContext from '../../../context/form/FormContext';
import Input from '../elements/Input';

const VehicleSection = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">
        İş Aracı Hakkında Bilgiler
      </p>
      <div className="flex gap-8">
        <Input
          title="Araç Tipi"
          altTitle="Araç tipini giriniz"
          width={'184px'}
          inputType="carTypeInput"
          dispatch={dispatch}
        />
        <Input
          title="Adres*"
          altTitle="Adresinizi giriniz"
          width={'415px'}
          inputType="addressInput"
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default VehicleSection;
