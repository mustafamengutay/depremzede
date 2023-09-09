import Input from './Input';

const DebrisFieldSection = () => {
  return (
    <div className="flex items-center justify-between mr-3">
      <p className="font-medium text-xl -tracking-2">
        Enkaz Bölgesi Hakkında Bilgiler
      </p>
      <div className="flex gap-8">
        <Input title="Kişi Sayısı" altTitle="Kişi sayısını giriniz" />
        <Input title="Adres" altTitle="Enkaz bölgesinin adresini giriniz" />
      </div>
    </div>
  );
};

export default DebrisFieldSection;
