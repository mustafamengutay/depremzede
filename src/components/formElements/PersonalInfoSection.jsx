import { useContext } from 'react';
import Input from './Input';
import FormContext from '../../context/FormContext';

const PersonalInfoSection = () => {
  const {
    nameInputValue,
    setNameInputValue,
    surNameInputValue,
    setSurNameInputValue,
    phoneNumberInputValue,
    setPhoneNumberInputValue,
    emailInputValue,
    setEmailInputValue,
  } = useContext(FormContext);

  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-xl -tracking-2">Kişisel Bilgiler</p>
      <div className="flex flex-wrap gap-7 w-[632px] justify-end">
        <div className="flex gap-8">
          <Input
            title="İsim"
            altTitle="İsminizi giriniz"
            value={nameInputValue}
            setValue={setNameInputValue}
          />
          <Input
            title="Soyisim"
            altTitle="Soyisminizi giriniz"
            value={surNameInputValue}
            setValue={setSurNameInputValue}
          />
        </div>
        <div className="flex gap-8">
          <Input
            title="Telefon Numarası*"
            altTitle="Telefon numaranızı giriniz"
            value={phoneNumberInputValue}
            setValue={setPhoneNumberInputValue}
          />
          <Input
            title="E-posta Adresi"
            altTitle="E-posta adresinizi giriniz"
            value={emailInputValue}
            setValue={setEmailInputValue}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
