import Input from './Input';

const PersonalInfoSection = () => {
  // TODO: When you are dealing with form states, there can be a problem, be careful!
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-xl -tracking-2">Kişisel Bilgiler</p>
      <div className="flex flex-wrap gap-7 w-[644px]">
        <div className="flex gap-8">
          <Input title="İsim" altTitle="İsminizi giriniz" />
          <Input title="Soyisim" altTitle="Soyisminizi giriniz" />
        </div>
        <div className="flex gap-8">
          <Input
            title="Telefon Numarası*"
            altTitle="Telefon numaranızı giriniz"
          />
          <Input title="E-posta Adresi" altTitle="E-posta adresinizi giriniz" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
