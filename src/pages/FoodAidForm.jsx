import { useEffect } from 'react';
import ExtraInformationSection from '../components/formElements/ExtraInformationSection';
import FormHeader from '../components/formElements/FormHeader';
import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import SubmitSection from '../components/formElements/SubmitSection';

const FoodAidForm = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const descriptionText = (
    <p>
      Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra sizinle
      iletişime geçilecektir.
    </p>
  );

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Gıda Yardımı Formu" description={descriptionText} />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            <ExtraInformationSection
              title="Gıda Yardımı Hakkında Bilgiler"
              altTitle="Gıda hakkında ek bilgiler ekleyebilirsiniz"
            />
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default FoodAidForm;
