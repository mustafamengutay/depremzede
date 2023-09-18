import { useEffect } from 'react';
import FormHeader from '../components/formElements/FormHeader';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import InventoryList from '../components/inventory/InventoryList';

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
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Envanter" description={descriptionText} />
      <div className="mt-16">
        <ul className="grid grid-cols-5 justify-items-center text-base font-medium">
          <li>Ürün İsmi</li>
          <li>Kategori</li>
          <li>Adet Sayısı</li>
          <li>Ölçü Birimi</li>
          <li>İşlem</li>
        </ul>
        <hr className="my-6" />
        <div>
          <InventoryList />
        </div>
      </div>
    </div>
  );
};

export default InventoriesList;
