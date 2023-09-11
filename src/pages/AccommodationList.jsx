import { useEffect } from 'react';
import FormHeader from '../components/formElements/FormHeader';
import InformationList from '../components/informationReports/InformationList';

const AccommodationList = () => {
  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);
  }, []);

  const descriptionText =
    'Aşağıdaki listeden konaklama sağlayan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Konaklama Sağlayanlar" description={descriptionText} />
      <div className="mt-16">
        <ul className="grid grid-cols-6 justify-items-center text-base font-medium">
          <li>İlan Sahibi</li>
          <li>Konaklama Adresi</li>
          <li>Şehir</li>
          <li>E-posta Adresi</li>
          <li>Telefon Numarası</li>
          <li>İlan Durumu</li>
        </ul>
        <hr className="mt-6 mb-8" />
        <InformationList />
      </div>
    </div>
  );
};

export default AccommodationList;
