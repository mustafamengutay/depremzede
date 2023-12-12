import { useContext } from 'react';
import FormContext from '../../../context/form/FormContext';
import TextArea from '../elements/TextArea';

const ExtraInformationSection = ({ title, altTitle }) => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className='md:flex-row flex-col flex items-center md:justify-between'>
      <p className='font-medium text-xl -tracking-2 md:mb-0 mb-4'>{title}</p>
      <TextArea
        title='Ek Bilgiler'
        altTitle={altTitle}
        inputType='extraInformationInput'
        dispatch={dispatch}
      />
    </div>
  );
};

export default ExtraInformationSection;
