import Input from './Input';

const PersonalInfoSection = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-xl -tracking-2">Kişisel Bilgiler</p>
      <div className="flex flex-wrap gap-7 w-[632px] justify-end">
        <div className="flex gap-8">
          <Input
            title="İsim"
            altTitle="İsminizi giriniz"
            inputType="nameInput"
          />
          <Input
            title="Soyisim"
            altTitle="Soyisminizi giriniz"
            inputType="surnameInput"
          />
        </div>
        <div className="flex gap-8">
          <Input
            title="Telefon Numarası*"
            altTitle="Telefon numaranızı giriniz"
            inputType="phoneNumberInput"
          />
          <Input
            title="E-posta Adresi"
            altTitle="E-posta adresinizi giriniz"
            inputType="emailInput"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
