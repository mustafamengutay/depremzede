import { useContext } from 'react';
import Input from './Input';
import FormContext from '../../context/FormContext';

const AccommodationSection = ({ firstInputWidth, secondInputWidth }) => {
  const {
    numberOfPeopleInputValue,
    setNumberOfPeopleInputValue,
    addressInputValue,
    setAddressInputValue,
  } = useContext(FormContext);

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
          value={numberOfPeopleInputValue}
          setValue={setNumberOfPeopleInputValue}
        />
        <Input
          title="Konaklama Adresi"
          altTitle="Konaklama bölgesinin adresini giriniz"
          width={secondInputWidth}
          value={addressInputValue}
          setValue={setAddressInputValue}
        />
      </div>
    </div>
  );
};

export default AccommodationSection;
