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

    const fetchList = async () => {
      const list = await getList('/users/konaklama-yardimi');
      setAccommodationList(list);
    };
    fetchList();
  }, [getList]);

  const descriptionText =
    'Aşağıdaki listeden konaklama sağlayan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title='Konaklama Sağlayanlar' description={descriptionText} />
      <div>
        <InformationList posts={accommodationList} />
      </div>
    </div>
  );
};

export default AccommodationList;
