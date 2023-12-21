import { useContext, useState } from 'react';

import { Dialog, Flex } from '@radix-ui/themes';
import * as Dialogs from '@radix-ui/react-dialog';

import check from '../../assets/check.svg';

import Input from '../form/elements/Input';
import Select from '../form/elements/Select';
import SubmitButton from '../form/elements/SubmitButton';
import FormContext from '../../context/form/FormContext';

import InformationLink from '../menu/InformationLink';

const AddInventoryDialog = () => {
  const { sendPost } = useContext(FormContext);

  const inventoryOptions = [
    {
      100: 'Çadır',
    },
    {
      200: 'Gıda',
    },
    {
      300: 'Giysi',
    },
    {
      401: 'İlk Yardım Seti',
    },
    {
      402: 'Tansiyon İlacı',
    },
  ];

  const [id, setId] = useState('100');

  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = {
      fiziksel_id: id,
      adetSayisi: stock,
    };

    console.log(request);

    // sendPost(request, '/gorevli-tibbiMalzeme-istegi');
  };

  const overlay = {
    backgroundColor: 'rgba(0, 0, 0, .8)',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <InformationLink icon={check} title='Envanter Ekle' width=' 650px' />
      </Dialog.Trigger>
      <Dialogs.Overlay style={overlay} />
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Envanter Ekle</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          İlaç İsmini ve Adet sayısını giriniz.
        </Dialog.Description>
        <form onSubmit={handleSubmit}>
          <Flex direction='column' gap='3'>
            <Select options={inventoryOptions} id={id} set={setId} />
            <Input title='Adet' width='400px' setState={setStock} />
          </Flex>
          <Dialog.Close>
            <div className='mt-4 flex justify-end'>
              <SubmitButton />
            </div>
          </Dialog.Close>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddInventoryDialog;
