import { useContext, useState } from 'react';

import { Dialog, Flex } from '@radix-ui/themes';
import { Toaster, toast } from 'sonner';
import * as Dialogs from '@radix-ui/react-dialog';

import medical from '../../assets/pharmacy.svg';

import HelpLink from '../menu/HelpLink';
import Input from '../form/elements/Input';
import SubmitButton from '../form/elements/SubmitButton';
import FormContext from '../../context/form/FormContext';

const MedicalDialog = () => {
  const { sendPost } = useContext(FormContext);

  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = {
      urunismi: name,
      adetSayisi: stock,
      istenilenBolge: location,
    };

    sendPost(request, '/gorevli-tibbiMalzeme-istegi');

    toast.success('Tıbbi Malzeme İsteğiniz Başarılı!');
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
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <HelpLink icon={medical} title='Tıbbi Malzeme İsteği' width='313px' />
        </Dialog.Trigger>
        <Dialogs.Overlay style={overlay} />
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Tıbbi Malzeme İsteği</Dialog.Title>
          <Dialog.Description size='2' mb='4'>
            İlaç Türünü ve Adet sayısını giriniz.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <Flex direction='column' gap='3'>
              <Input title='İlaç Adı' width='400px' setState={setName} />
              <Input title='Adet' width='400px' setState={setStock} />
              <Input
                title='İstenilen Bölge'
                width='400px'
                setState={setLocation}
              />
            </Flex>
            <Dialog.Close>
              <div className='mt-4 flex justify-end'>
                <SubmitButton />
              </div>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Root>
      <Toaster expand visibleToasts={5} />
    </div>
  );
};

export default MedicalDialog;
