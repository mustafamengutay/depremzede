import { useEffect } from 'react';
import FormHeader from '../components/form/FormHeader';
import InformationList from '../components/information-reports/InformationList';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

const AccommodationList = () => {
  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden konaklama sağlayan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title='Konaklama Sağlayanlar' description={descriptionText} />
      <div className='mt-16'>
        <ul className='grid grid-cols-6 justify-items-center text-base font-medium'>
          <li>İlan Sahibi</li>
          <li>Konaklama Adresi</li>
          <li>Şehir</li>
          <li>E-posta Adresi</li>
          <li>Telefon Numarası</li>
          <li>İlan Durumu</li>
        </ul>
        <hr className='mt-6 mb-8' />
        <InformationList />
      </div>
    </div>
  );
};

export default AccommodationList;
