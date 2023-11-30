import { useContext } from 'react';
import FormContext from '../../../context/form/FormContext';
import Input from '../elements/Input';

const AccommodationSection = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">
        Konaklama Hakkında Bilgiler
      </p>
      <div className="flex gap-8">
        <Input
          title="Kişi Sayısı"
          altTitle="Kişi sayısını giriniz"
          width={'184px'}
          inputType="numberOfPeopleInput"
          dispatch={dispatch}
        />
        <Input
          title="Konaklama Adresi"
          altTitle="Konaklama bölgesinin adresini giriniz"
          width={'415px'}
          inputType="addressInput"
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default AccommodationSection;
