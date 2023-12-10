import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FormHeader from "../components/form/FormHeader";
import PersonalInfoSection from "../components/form/sections/PersonalInfoSection";
import SubmitSection from "../components/form/sections/SubmitSection";
import ExtraInformationSection from "../components/form/sections/ExtraInformationSection";
import VehicleSection from "../components/form/sections/VehicleSection";
import DebrisFieldSection from "../components/form/sections/DebrisFieldSection";
import AccommodationSection from "../components/form/sections/AccommodationSection";

import { setBackgroundColorWhite } from "../utils/BackgroundColorUtils";
import { resetLocation } from "../utils/ScrollUtils";

const Form = () => {
  const location = useLocation();

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  let descriptionText;
  let formHeaderTitle;
  let sectionComponent;

  switch (location.pathname) {
    case "/form/enkaz-altinda":
      formHeaderTitle = "Tanıdığım Enkaz Altında Formu";
      descriptionText = (
        <p>
          Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
          <span className="text-black"> Enkaz Altında Olanlar</span> bölümünde
          görünecektir.
        </p>
      );
      sectionComponent = <DebrisFieldSection />;
      break;
    case "/form/konaklama-yardimi":
      formHeaderTitle = "Konaklama Sağlayabilirim Formu";
      descriptionText = (
        <p>
          Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
          <span className="text-black"> Konaklama Sağlayanlar</span> bölümünde
          görünecektir.
        </p>
      );
      sectionComponent = <AccommodationSection />;
      break;
    case "/form/giysi-yardimi":
      formHeaderTitle = "Giysi Yardımı Formu";
      sectionComponent = (
        <ExtraInformationSection
          title="Giysi Yardımı Hakkında Bilgiler"
          altTitle="Giysi hakkında ek bilgiler ekleyebilirsiniz"
        />
      );
      break;
    case "/form/gida-yardimi":
      formHeaderTitle = "Gıda Yardımı Formu";
      sectionComponent = (
        <ExtraInformationSection
          title="Gıda Yardımı Hakkında Bilgiler"
          altTitle="Gıda hakkında ek bilgiler ekleyebilirsiniz"
        />
      );
      break;
    case "/form/is-araci-kullanabilirim":
      formHeaderTitle = "İş Aracı Kullanabilirim Formu";
      sectionComponent = <VehicleSection />;
      break;
    default:
      window.location = "/";
  }

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title={formHeaderTitle} description={descriptionText} />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            {sectionComponent}
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default Form;
