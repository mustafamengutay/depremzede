import { useEffect } from 'react';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import FormHeader from '../components/form/FormHeader';
import OfficerList from '../components/officer/OfficerList';
import SearchBar from '../components/form/SearchBar';
import Select from '../components/form/elements/Select';

const OfficersList = () => {
  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();
  });

  const descriptionText =
    'Aşağıdaki listeden tüm görevlilerin bilgilerini görebilirsiniz.';

  return (
    <div className='container w-screen h-screen -tracking-4  min-w-[464px]'>
      <FormHeader title='Görevliler' description={descriptionText} />

      <div className='mt-16 flex justify-between items-center'>
        <SearchBar title='ID veya isim giriniz...' width='300px' />
        <Select />
      </div>

      <div className='mt-6 overflow-x-auto'>
        <ul className='grid grid-cols-8 justify-items-center items-center text-base font-medium min-w-full divide-y w-[1160px]'>
          <li>ID</li>
          <li>İsim Soyisim</li>
          <li>Telefon Numarası</li>
          <li>E-posta Adresi</li>
          <li>Doğum Tarihi</li>
          <li>Geldiği Şehir</li>
          <li>Atandığı Bölge</li>
          <li>Bilgileri Güncelle</li>
        </ul>
        <hr className='my-6' />
        <OfficerList />
      </div>
    </div>
  );
};

export default OfficersList;
