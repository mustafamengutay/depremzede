import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import FormHeader from '../components/formElements/FormHeader';
import PersonalInfoSection from '../components/formElements/PersonalInfoSection';
import SubmitSection from '../components/formElements/SubmitSection';

const Form = () => {
  const location = useLocation();

  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);
  }, []);

  let descriptionText;
  let formHeaderTitle;

  switch (location.pathname) {
    case '/form/enkaz-altinda':
      formHeaderTitle = 'Tanıdığım Enkaz Altında Formu';
      descriptionText = (
        <p>
          Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
          <span className="text-black"> Enkaz Altında Olanlar</span> bölümünde
          görünecektir.
        </p>
      );
      break;
    case '/form/konaklama-yardimi':
      formHeaderTitle = 'Konaklama Sağlayabilirim Formu';
      descriptionText = (
        <p>
          Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra
          <span className="text-black"> Konaklama Sağlayanlar</span> bölümünde
          görünecektir.
        </p>
      );
      break;
    case '/form/giysi-yardimi':
      formHeaderTitle = 'Giysi Yardımı Formu';
      break;
    case '/form/gida-yardimi':
      formHeaderTitle = 'Gıda Yardımı Formu';
      break;
    case '/form/is-araci-kullanabilirim':
      formHeaderTitle = 'İş Aracı Kullanabilirim Formu';
      break;
    default:
      formHeaderTitle = 'Form';
  }

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title={formHeaderTitle} description={descriptionText} />
      <div className="my-16 ">
        <form className="flex flex-col">
          <div>
            <PersonalInfoSection />
            <hr className="my-8" />
            <Outlet />
          </div>
          <SubmitSection />
        </form>
      </div>
    </div>
  );
};

export default Form;
