import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../components/form/FormHeader';
import SearchBar from '../components/form/SearchBar';

import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

import FormContext from '../context/form/FormContext';
import InventoryList from '../components/inventory/InventoryList';

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([]);
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
      const list = await getList('/envanter-listele');
      setInventoryList(list);
    };
    fetchList();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden depoda bulunan envanterleri görebilir ve ekleme/çıkarma işlemleri yapabilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4 min-w-[464px]'>
      <FormHeader title='Envanter' description={descriptionText} />
      <div className='flex justify-between items-center'>
        <SearchBar title='İstenilen ürünün ismini giriniz...' width='300px' />
      </div>
      <div className='mt-6 overflow-x-auto'>
        <InventoryList posts={inventoryList} />
      </div>
    </div>
  );
};

export default Inventory;
