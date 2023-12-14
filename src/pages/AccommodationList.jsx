import { useContext, useEffect, useState } from 'react';

import FormHeader from '../components/form/FormHeader';
import InformationList from '../components/information-reports/InformationList';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

import FormContext from '../context/form/FormContext';

const AccommodationList = () => {
  const [accommodationList, setAccommodationList] = useState([]);

  const { getList } = useContext(FormContext);

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();

    getList('/users/konaklama-yardimi', setAccommodationList);
  }, []);

  const descriptionText =
    'Aşağıdaki listeden konaklama sağlayan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title='Konaklama Sağlayanlar' description={descriptionText} />
      <div className='mt-16'>
        <InformationList posts={accommodationList} />
      </div>
    </div>
  );
};

export default AccommodationList;
