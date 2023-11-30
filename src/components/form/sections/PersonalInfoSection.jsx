import { useContext } from 'react';
import FormContext from '../../../context/form/FormContext';
import Input from '../elements/Input';

const PersonalInfoSection = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-xl -tracking-2">Kişisel Bilgiler</p>
      <div className="flex flex-wrap gap-7 w-[632px] justify-end">
        <div className="flex gap-8">
          <Input
            title="İsim"
            altTitle="İsminizi giriniz"
            inputType="nameInput"
            dispatch={dispatch}
          />
          <Input
            title="Soyisim"
            altTitle="Soyisminizi giriniz"
            inputType="surnameInput"
            dispatch={dispatch}
          />
        </div>
        <div className="flex gap-8">
          <Input
            title="Telefon Numarası*"
            altTitle="Telefon numaranızı giriniz"
            inputType="phoneNumberInput"
            dispatch={dispatch}
          />
          <Input
            title="E-posta Adresi"
            altTitle="E-posta adresinizi giriniz"
            inputType="emailInput"
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
