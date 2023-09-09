import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import DebrisFieldSection from '../components/formElements/DebrisFieldSection';
import FormHeader from '../components/formElements/FormHeader';
import SubmitSection from '../components/formElements/SubmitSection';
import { useEffect } from 'react';

const UnderDebrisForm = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const descriptionText = (
    <p>
      Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
      <span className="text-black"> Enkaz Altında Olanlar</span> bölümünde
      görünecektir.
    </p>
  );

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader
        title="Tanıdığım Enkaz Altında Formu"
        description={descriptionText}
      />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            <DebrisFieldSection />
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default UnderDebrisForm;
