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

    const fetchList = async () => {
      const list = await getList('/users/approved-requests');
      setUnderDebrisList(list);
    };
    fetchList();
  }, [getList]);

  const descriptionText =
    'Aşağıdaki listeden enkaz altında olan vatandaşlarımızın adresini görebilir ve ilan sahibiyle iletişime geçebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 '>
      <FormHeader title='Enkaz Altında Olanlar' description={descriptionText} />
      <div className='overflow-x-auto'>
        <InformationList posts={underDebrisList} />
      </div>
    </div>
  );
};

export default UnderDebrisList;
