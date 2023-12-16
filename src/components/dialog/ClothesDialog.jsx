import { useState } from 'react';

import { Dialog, Flex } from '@radix-ui/themes';
import * as Dialogs from '@radix-ui/react-dialog';

import clothing from '../../assets/clothing-dash.svg';

import HelpLink from '../menu/HelpLink';
import Input from '../form/elements/Input';
import SubmitButton from '../form/elements/SubmitButton';

const ClothesDialog = () => {
  const [sex, setSex] = useState('');
  const [size, setSize] = useState('');
  const [clothingType, setClothingType] = useState('');
  const [stock, setStock] = useState('');

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
        <HelpLink icon={clothing} title='Giysi İsteği' width='313px' />
      </Dialog.Trigger>
      <Dialogs.Overlay style={overlay} />
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Giysi İsteği</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          Bilgileri giriniz.
        </Dialog.Description>
        <form>
          <Flex direction='column' gap='3'>
            <Input title='Cinsiyet' width='400px' setState={setSex} />
            <Input title='Beden' width='400px' setState={setSize} />
            <Input title='Tür' width='400px' setState={setClothingType} />
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

export default ClothesDialog;
