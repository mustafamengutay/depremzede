import { useEffect } from 'react';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import FormHeader from '../components/formElements/FormHeader';
import OfficerList from '../components/officer/OfficerList';

const OfficersList = () => {
  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();
  });

  const descriptionText =
    'Aşağıdaki listeden tüm görevlilerin bilgilerini görebilirsiniz.';

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Görevliler" description={descriptionText} />
      <div className="mt-16">
        <ul className="grid grid-cols-7 justify-items-center text-base font-medium">
          <li>ID</li>
          <li>İsim Soyisim</li>
          <li>Telefon Numarası</li>
          <li>E-posta Adresi</li>
          <li>Doğum Tarihi</li>
          <li>Geldiği Şehir</li>
          <li>Atandığı Bölge</li>
        </ul>
        <hr className="my-6" />
        <OfficerList />
      </div>
    </div>
  );
};

export default OfficersList;
