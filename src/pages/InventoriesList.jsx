import { useEffect } from 'react';
import FormHeader from '../components/form/FormHeader';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import InventoryList from '../components/inventory/InventoryList';
import SearchBar from '../components/form/SearchBar';
import Select from '../components/form/elements/Select';

const InventoriesList = () => {
  // TODO: We can add a search bar

  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden depoda bulunan envanterleri görebilir ve ekleme/çıkarma işlemleri yapabilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title='Envanter' description={descriptionText} />

      <div className='flex justify-between items-center'>
        <SearchBar title='Ürün ismini giriniz...' width='300px' />
        <Select />
      </div>

      <div className='mt-6'>
        <ul className='grid grid-cols-5 justify-items-center text-base font-medium'>
          <li>Ürün İsmi</li>
          <li>Kategori</li>
          <li>Adet Sayısı</li>
          <li>Ölçü Birimi</li>
          <li>İşlem</li>
        </ul>
        <hr className='my-6' />
        <div>
          <InventoryList />
        </div>
      </div>
    </div>
  );
};

export default InventoriesList;
