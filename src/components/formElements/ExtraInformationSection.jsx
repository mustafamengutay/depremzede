import { useContext } from 'react';
import TextArea from './TextArea';
import FormContext from '../../context/FormContext';

const ExtraInformationSection = ({ title, altTitle }) => {
  const { extraInformation, setExtraInformation } = useContext(FormContext);

  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">{title}</p>
      <TextArea
        title="Ek Bilgiler"
        altTitle={altTitle}
        value={extraInformation}
        setValue={setExtraInformation}
      />
    </div>
  );
};

export default ExtraInformationSection;
