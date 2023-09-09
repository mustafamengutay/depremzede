import FoodAidSection from '../components/formElements/FoodAidSection';
import FormHeader from '../components/formElements/FormHeader';
import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import SubmitSection from '../components/formElements/SubmitSection';

const FoodAidForm = () => {
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
            <FoodAidSection />
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default FoodAidForm;
