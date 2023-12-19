import { useContext, useEffect, useState } from 'react';
import FormHeader from '../components/form/FormHeader';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import OfficerRequestList from '../components/officer/OfficerRequestList';
import SearchBar from '../components/form/SearchBar';
import Select from '../components/form/elements/Select';

import FormContext from '../context/form/FormContext';

const OfficerRequests = () => {
  const [officerRequestList, setOfficerRequestList] = useState([]);

  const { getList } = useContext(FormContext);

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();

    const fetchList = async () => {
      const list = await getList('/gorevli-isteklerini-listele');
      setOfficerRequestList(list);
    };
    fetchList();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden görevliler tarafından yapılan istekleri görebilir ve onaylayabilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 min-w-[464px]'>
      <FormHeader title='Görevli İstekleri' description={descriptionText} />
      <div className='flex justify-between items-center'>
        <SearchBar title='İstenilen ürünün ismini giriniz...' width='300px' />
        <Select />
      </div>
      <div className='mt-6 overflow-x-auto'>
        <OfficerRequestList posts={officerRequestList} />
      </div>
    </div>
  );
};

export default OfficerRequests;
