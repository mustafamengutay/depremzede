import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

import FormHeader from '../components/form/FormHeader';
import SearchBar from '../components/form/SearchBar';

import FormContext from '../context/form/FormContext';
import OfficerList from '../components/officer/OfficerList';

const Officers = () => {
  const [officers, setOfficers] = useState([]);
  const navigate = useNavigate();

  const { getList } = useContext(FormContext);

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();

    if (localStorage.getItem('government') !== 'true') {
      navigate('/');
    }

    const fetchList = async () => {
      const list = await getList('/gorevliler');
      setOfficers(list);
    };
    fetchList();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden tüm görevlilerin bilgilerini görebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 min-w-[464px]'>
      <FormHeader title='Görevliler' description={descriptionText} />
      <div className='flex justify-between items-center'>
        <SearchBar title='İsim giriniz...' width='300px' />
      </div>
      <div className='mt-6 overflow-x-auto'>
        <OfficerList posts={officers} />
      </div>
    </div>
  );
};

export default Officers;
