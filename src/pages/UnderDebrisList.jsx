import { useContext, useEffect, useState } from 'react';
import FormHeader from '../components/form/FormHeader';
import InformationList from '../components/information-reports/InformationList';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import FormContext from '../context/form/FormContext';

const UnderDebrisList = () => {
  const [underDebrisList, setUnderDebrisList] = useState([]);

  const { getList } = useContext(FormContext);

  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();

    getList('/users/enkaz-altinda', setUnderDebrisList);
  }, []);

  const descriptionText =
    'Aşağıdaki listeden enkaz altında olan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 '>
      <FormHeader title='Enkaz Altında Olanlar' description={descriptionText} />
      <div className='mt-16 overflow-x-auto'>
        <ul className='grid grid-cols-6 justify-items-center text-base font-medium min-w-full'>
          <li>İlan Sahibi</li>
          <li>Enkaz Adresi</li>
          <li>Şehir</li>
          <li>E-posta Adresi</li>
          <li>Telefon Numarası</li>
          <li>İlan Durumu</li>
        </ul>
        <hr className='mt-6 mb-8' />
        <InformationList posts={underDebrisList} />
      </div>
    </div>
  );
};

export default UnderDebrisList;
