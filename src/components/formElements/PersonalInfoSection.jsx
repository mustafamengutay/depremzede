import { useContext } from 'react';
import Input from './Input';
import FormContext from '../../context/form/FormContext';

const PersonalInfoSection = () => {
  const { nameInput, surnameInput, phoneNumberInput, emailInput } =
    useContext(FormContext);

  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-xl -tracking-2">Kişisel Bilgiler</p>
      <div className="flex flex-wrap gap-7 w-[632px] justify-end">
        <div className="flex gap-8">
          <Input
            title="İsim"
            altTitle="İsminizi giriniz"
            inputType={nameInput}
            action={'SET_NAME'}
          />
          <Input
            title="Soyisim"
            altTitle="Soyisminizi giriniz"
            inputType={surnameInput}
            action={'SET_SURNAME'}
          />
        </div>
        <div className="flex gap-8">
          <Input
            title="Telefon Numarası*"
            altTitle="Telefon numaranızı giriniz"
            inputType={phoneNumberInput}
            action={'SET_PHONE_NUMBER'}
          />
          <Input
            title="E-posta Adresi"
            altTitle="E-posta adresinizi giriniz"
            inputType={emailInput}
            action={'SET_EMAIL'}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
