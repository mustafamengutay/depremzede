import Input from '../elements/Input';

const AccommodationSection = ({ firstInputWidth, secondInputWidth }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">
        Konaklama Hakkında Bilgiler
      </p>
      <div className="flex gap-8">
        <Input
          title="Kişi Sayısı"
          altTitle="Kişi sayısını giriniz"
          width={firstInputWidth}
          inputType="numberOfPeopleInput"
        />
        <Input
          title="Konaklama Adresi"
          altTitle="Konaklama bölgesinin adresini giriniz"
          width={secondInputWidth}
          inputType="addressInput"
        />
      </div>
    </div>
  );
};

export default AccommodationSection;
