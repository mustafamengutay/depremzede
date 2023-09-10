import { useEffect } from 'react';

import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import FormHeader from '../components/formElements/FormHeader';
import SubmitSection from '../components/formElements/SubmitSection';
import VehicleSection from '../components/formElements/VehicleSection';

const VehicleForm = () => {
  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="İş Aracı Kullanabilirim Formu" />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            <VehicleSection
              firstInputWidth={'184px'}
              secondInputWidth={'415px'}
            />
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default VehicleForm;
