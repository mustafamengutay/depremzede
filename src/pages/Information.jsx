import React, { useEffect } from 'react';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import FormHeader from '../components/form/FormHeader';

const Information = () => {
  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  });

  const descriptionText =
    'Aşağıdaki listeden genel bilgilendirmeleri okuyabilirsiniz';

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title='Bilgilendirme' description={descriptionText} />
      <div>
        <div className='mb-12'>
          <h1 className='font-semibold mb-4'>
            Deprem Durumunda Yapılması Gerekenler
          </h1>
          <p>
            Deprem, doğal afetlerden biridir ve hayatımızı ciddi şekilde
            etkileyebilir. Deprem anında paniklemeden, bilinçli ve doğru
            adımları atmak çok önemlidir. İşte deprem durumunda yapmanız
            gerekenler:
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>1. Sakin Kalın</h1>
          <p>
            Panik yapmak yerine sakin kalmaya çalışın. Kontrolü kaybetmeden
            etrafınızdaki durumu değerlendirin.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>2. Tehlike Alanından Uzaklaşın</h1>
          <p>
            Yapıların içindeyseniz, pencere ve camlardan uzaklaşın. Büyük, ağır
            mobilyalardan, raflardan ve pencere kenarlarından uzak durun. Eğer
            dışarıdaysanız, açık alana veya güvenli bir alana gidin.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>3. Baş ve Boyun Koruması</h1>
          <p>
            Eğer mümkünse, başınızı ve boyun bölgenizi koruyacak şekilde
            alçalın. Bu, düşen nesnelerden korunmanıza yardımcı olabilir.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>4. Asansörleri Kullanmayın</h1>
          <p>
            Deprem sırasında asansör kullanmaktan kaçının. Asansörler
            sıkışabilir ve mahsur kalabilirsiniz.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>
            5. Açık Alanlarda Güvende Kalın
          </h1>
          <p>
            Eğer dışarıdaysanız, binalardan, direklerden ve diğer yapı ve
            nesnelerden uzak durun. Açık bir alanda bekleyin.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>6. Güvenli Bir Yere Saklanın</h1>
          <p>
            Masanın altına, sandalyenin altına veya bir iç duvarın yanına
            saklanın. Başınızı ve boyunuzu koruyacak şekilde alçalın.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>
            7. Cep Telefonları ve Acil Durum Ekipmanları
          </h1>
          <p>
            Cep telefonunuzu acil durumda kullanmak üzere şarj edin. Acil durum
            çantasında, su, ilaçlar ve temel ihtiyaç malzemeleri bulundurun.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>
            8. Dışarıda İseniz Dikkatli Olun
          </h1>
          <p>
            Düşen nesnelerden kaçının ve tehlikeli alanlardan uzak durun.
            Elektrik tellerinden ve hasar görmüş yapı ve binalardan uzak durun.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>9. Haberleri Takip Edin</h1>
          <p>
            Depremin ardından güncel bilgileri almak için radyo, televizyon veya
            sosyal medya gibi kaynakları kullanın.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-semibold mb-4'>
            10. Yardıma İhtiyaç Duyanlara Yardım Edin
          </h1>
          <p>
            Çevrenizdeki insanlara yardım edin, özellikle çocuklar, yaşlılar ve
            engelliler için dikkat gösterin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
