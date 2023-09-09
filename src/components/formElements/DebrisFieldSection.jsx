import Input from './Input';

const DebrisFieldSection = ({ firstInputWidth, secondInputWidth }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">
        Enkaz Bölgesi Hakkında Bilgiler
      </p>
      <div className="flex gap-8">
        <Input
          title="Kişi Sayısı"
          altTitle="Kişi sayısını giriniz"
          width={firstInputWidth}
        />
        <Input
          title="Adres"
          altTitle="Enkaz bölgesinin adresini giriniz"
          width={secondInputWidth}
        />
      </div>
    </div>
  );
};

export default DebrisFieldSection;
