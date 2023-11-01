import { useEffect } from 'react';
import FormHeader from '../components/form/FormHeader';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import OfficerRequestList from '../components/officer/OfficerRequestList';
import SearchBar from '../components/form/SearchBar';
import Select from '../components/form/elements/Select';

const OfficerRequests = () => {
  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);

  const descriptionText =
    'Aşağıdaki listeden görevliler tarafından yapılan istekleri görebilir, onaylayabilir ve iptal edebilirsiniz.';

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Görevli İstekleri" description={descriptionText} />

      <div className="mt-16 flex justify-between items-center">
        <SearchBar title="İstenilen ürünün ismini giriniz..." width="300px" />
        <Select />
      </div>

      <div className="mt-6">
        <ul className="grid grid-cols-6 justify-items-center text-base font-medium">
          <li>Görevli Adı</li>
          <li>Ürün İsmi</li>
          <li>Kategori</li>
          <li>Adet Sayısı</li>
          <li>İstenilen Bölge</li>
          <li>İşlem</li>
        </ul>
        <hr className="my-6" />
        <div>
          <OfficerRequestList />
        </div>
      </div>
    </div>
  );
};

export default OfficerRequests;
