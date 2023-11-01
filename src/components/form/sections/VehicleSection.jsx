import Input from '../elements/Input';

const VehicleSection = ({ firstInputWidth, secondInputWidth }) => {
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
          inputType="carTypeInput"
        />
        <Input
          title="Adres*"
          altTitle="Adresinizi giriniz"
          width={secondInputWidth}
          inputType="addressInput"
        />
      </div>
    </div>
  );
};

export default VehicleSection;
