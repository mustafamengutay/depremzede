import { useContext, useEffect, useState } from 'react';
import FormHeader from '../components/form/FormHeader';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import SearchBar from '../components/form/SearchBar';
import Select from '../components/form/elements/Select';

import FormContext from '../context/form/FormContext';
import InventoryList from '../components/inventory/InventoryList';

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([]);

  const { getList } = useContext(FormContext);

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();

    const fetchList = async () => {
      const list = await getList('/inventory');
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
        <Select />
      </div>
      <div className='mt-6 overflow-x-auto'>
        <InventoryList posts={inventoryList} />
      </div>
    </div>
  );
};

export default Inventory;