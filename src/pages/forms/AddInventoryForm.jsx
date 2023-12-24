import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setBackgroundColorWhite } from '../../utils/BackgroundColorUtils';
import { resetLocation } from '../../utils/ScrollUtils';

import Input from '../../components/form/elements/Input';
import SubmitButton from '../../components/form/elements/SubmitButton';
import TextArea from '../../components/form/elements/TextArea';
import FormHeader from '../../components/form/FormHeader';

import FormContext from '../../context/form/FormContext';

/**
 *
 * @summary DEPRECATED
 */
const UnderDebrisForm = () => {
  const { sendPost } = useContext(FormContext);
  const navigate = useNavigate();

  const [inventoryName, setInventoryName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();

    if (localStorage.getItem('government') !== 'true') {
      navigate('/');
    }
  }, []);

  const formHeaderTitle = 'Envanter Ekle Formu';
  const descriptionText = (
    <p>
      Form bilgileri gönderildikten sonra
      <span className='text-black'> Envanterler</span> bölümünde
      listelenecektir.
    </p>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      inventoryName,
      category,
      type,
      stock,
      description,
    };

    sendPost(post, '/inventory');

    navigate('/form-gonderildi');
  };

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader title={formHeaderTitle} description={descriptionText} />

      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div>
          <div className='flex justify-between items-center flex-col sm:flex-row'>
            <p className='font-medium text-xl -tracking-2 mb-4 sm:mb-0 md:whitespace-nowrap'>
              Ürün Bilgileri
            </p>
            <div className='flex flex-wrap gap-7 justify-center sm:justify-end'>
              <div className='flex flex-col sm:flex-row gap-8'>
                <Input
                  title='Ürün İsmi'
                  altTitle='Ürünün ismini giriniz'
                  setState={setInventoryName}
                />
                <Input
                  title='Kategori'
                  altTitle='Ürün kategorini giriniz'
                  setState={setCategory}
                />
              </div>
              <div className='flex flex-col sm:flex-row gap-8'>
                <Input
                  title='Ürün Türü'
                  altTitle='Ürün türünü giriniz'
                  setState={setType}
                />
                <Input
                  title='Adet Sayısı'
                  altTitle='Ürün adetini giriniz'
                  setState={setStock}
                />
              </div>
            </div>
          </div>
          <hr className='my-8' />
          <div className='flex flex-col items-center sm:flex-row sm:items-center justify-between'>
            <p className='font-medium text-xl -tracking-2 mb-4 sm:mb-0'>
              Ek Bilgiler
            </p>
            <div className='flex flex-col sm:flex-row gap-8'>
              <TextArea
                title='Ürün Hakkında Bilgiler'
                altTitle='Boş bırakabilir veya  ek bilgiler ekleyebilirsiniz'
                setState={setDescription}
              />
            </div>
          </div>
        </div>
        <div className='flex items-center gap-72 my-12 self-end'>
          <p className='text-base -tracking-2 font-light'>
            *Bu alanlar zorunludur.
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default UnderDebrisForm;
