import { useEffect } from 'react';

import ExtraInformationSection from '../components/formElements/ExtraInformationSection';
import FormHeader from '../components/formElements/FormHeader';
import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import SubmitSection from '../components/formElements/SubmitSection';

const ClothingAidForm = () => {
  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Giysi Yardımı Formu" />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            <ExtraInformationSection
              title="Giysi Yardımı Hakkında Bilgiler"
              altTitle="Giysi hakkında ek bilgiler ekleyebilirsiniz"
            />
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default ClothingAidForm;
