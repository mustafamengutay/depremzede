import { useContext, useEffect, useState } from 'react';
import FormHeader from '../components/form/FormHeader';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import OfficerRequestList from '../components/officer/OfficerRequestList';
import SearchBar from '../components/form/SearchBar';

import FormContext from '../context/form/FormContext';

const OfficerRequests = () => {
  const [officerRequestList, setOfficerRequestList] = useState([]);

  const { getList } = useContext(FormContext);

  const fetchList = async () => {
    const list = await getList('/gorevli-isteklerini-listele');
    setOfficerRequestList(list);
  };

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();

    fetchList();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden görevliler tarafından yapılan istekleri görebilir ve onaylayabilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 min-w-[464px]'>
      <FormHeader title='Görevli İstekleri' description={descriptionText} />
      <div className='flex justify-between items-center'>
        <SearchBar title='İstenilen ürünün ismini giriniz...' width='300px' />
      </div>
      <div className='mt-6 overflow-x-auto'>
        <OfficerRequestList posts={officerRequestList} fetchList={fetchList} />
      </div>
    </div>
  );
};

export default OfficerRequests;
