import { useContext, useState } from 'react';

import { Dialog, Flex } from '@radix-ui/themes';
import { Toaster, toast } from 'sonner';
import * as Dialogs from '@radix-ui/react-dialog';

import food from '../../assets/utensils.svg';

import HelpLink from '../menu/HelpLink';
import Input from '../form/elements/Input';
import SubmitButton from '../form/elements/SubmitButton';

import FormContext from '../../context/form/FormContext';

const FoodAidDialog = () => {
  const { sendPost } = useContext(FormContext);

  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const officerName =
      localStorage.getItem('name') + ' ' + localStorage.getItem('surname');

    const request = {
      gorevliAdi: officerName,
      adetSayisi: stock,
      istenilenBolge: localStorage.getItem('resposibleFromCity'),
    };

    sendPost(request, '/gorevli-gida-istegi');

    toast.success('Gıda İsteğiniz Başarılı!');
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
          <HelpLink icon={food} title='Gıda İsteği' width='313px' />
        </Dialog.Trigger>
        <Dialogs.Overlay style={overlay} />
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Gıda İsteği</Dialog.Title>
          <Dialog.Description size='2' mb='4'>
            Adet sayısını ve bölgeyi giriniz.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <Flex direction='column' gap='3'>
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
      <Toaster expand visibleToasts={5} />
    </div>
  );
};

export default FoodAidDialog;
