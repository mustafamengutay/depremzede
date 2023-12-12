import { useEffect } from 'react';
import FormHeader from '../components/form/FormHeader';
import InformationList from '../components/information-reports/InformationList';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

const UnderDebrisList = () => {
  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden enkaz altında olan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 '>
      <FormHeader title='Enkaz Altında Olanlar' description={descriptionText} />
      <div className='mt-16 overflow-x-auto'>
        <ul className='grid grid-cols-6 justify-items-center text-base font-medium min-w-full divide-y w-[1160px] '>
          <li>İlan Sahibi</li>
          <li>Enkaz Adresi</li>
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

export default UnderDebrisList;
