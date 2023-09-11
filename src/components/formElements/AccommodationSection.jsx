import { useContext } from 'react';
import Input from './Input';
import FormContext from '../../context/form/FormContext';

const AccommodationSection = ({ firstInputWidth, secondInputWidth }) => {
  const { numberOfPeopleInput, addressInput } = useContext(FormContext);

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
          inputType={numberOfPeopleInput}
          action={'SET_NUMBER_OF_PEOPLE'}
        />
        <Input
          title="Konaklama Adresi"
          altTitle="Konaklama bölgesinin adresini giriniz"
          width={secondInputWidth}
          inputType={addressInput}
          action={'SET_ADDRESS'}
        />
      </div>
    </div>
  );
};

export default AccommodationSection;
