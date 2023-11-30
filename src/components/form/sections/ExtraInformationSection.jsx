import { useContext } from 'react';
import FormContext from '../../../context/form/FormContext';
import TextArea from '../elements/TextArea';

const ExtraInformationSection = ({ title, altTitle }) => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">{title}</p>
      <TextArea
        title="Ek Bilgiler"
        altTitle={altTitle}
        inputType="extraInformationInput"
        dispatch={dispatch}
      />
    </div>
  );
};

export default ExtraInformationSection;
