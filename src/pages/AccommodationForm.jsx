import { useEffect } from 'react';

import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import DebrisFieldSection from '../components/formElements/DebrisFieldSection';
import FormHeader from '../components/formElements/FormHeader';
import SubmitSection from '../components/formElements/SubmitSection';
import AccommodationSection from '../components/formElements/AccommodationSection';

const AccommodationForm = () => {
  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);
  }, []);

  const descriptionText = (
    <p>
      Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
      <span className="text-black"> Konaklama Sağlayanlar</span> bölümünde
      görünecektir.
    </p>
  );

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader
        title="Konaklama Sağlayabilirim Formu"
        description={descriptionText}
      />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            <AccommodationSection
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

export default AccommodationForm;