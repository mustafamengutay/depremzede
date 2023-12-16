import { useEffect, useState } from 'react';

import { ScrollArea, Table } from '@radix-ui/themes';
import ReactPaginate from 'react-paginate';

import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

import FormHeader from '../components/form/FormHeader';

import posts from '../data/posts.json';

const VictimConfirmation = () => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const records = 8;

  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();

    setFilterData(
      posts.filter((item, index) => {
        return (index >= page * records) & (index < (page + 1) * records);
      })
    );
  }, [page, posts]);

  const descriptionText = (
    <p>
      Aşağıdaki listeden enkaz altında olan vatandaşlarımızın bilgilerini
      doğruladıktan sonra
      <span className='text-black'> Enkaz Altında Olanlar</span> bölümünde
      görünecektir.
    </p>
  );

  return (
    <div className='container w-screen h-screen -tracking-4'>
      <FormHeader
        title='Depremzede Bilgi Doğrulama'
        description={descriptionText}
      />
      <div className='overflow-x-auto'>
        <ScrollArea scrollbars='horizontal' size='1' type='auto' radius='full'>
          <Table.Root size={'2'}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell justify={'center'}>
                  İsim
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={'center'}>
                  Adres
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={'center'}>
                  Şehir
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={'center'}>
                  E-posta
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={'center'}>
                  Telefon Numarası
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={'center'}>
                  Doğrula
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {filterData &&
                filterData.map((post) => {
                  return (
                    <Table.Row align={'center'}>
                      <Table.RowHeaderCell justify={'center'}>
                        {post.name}
                      </Table.RowHeaderCell>
                      <Table.Cell justify={'center'}>{post.address}</Table.Cell>
                      <Table.Cell justify={'center'}>{post.city}</Table.Cell>
                      <Table.Cell justify={'center'}>{post.email}</Table.Cell>
                      <Table.Cell justify={'center'}>{post.phoneNo}</Table.Cell>
                      <Table.Cell align='center'>
                        <div className='flex justify-center gap-2'>
                          <button className='flex flex-col items-center justify-center h-8 w-20  py-2 px-4 bg-grey-1 hover:bg-black transition text-white rounded-lg'>
                            Doğrula
                          </button>
                          <button className='flex flex-col items-center justify-center h-8 w-20  py-2 px-4 border border-grey-1 text-black hover:bg-black transition hover:text-white rounded-lg'>
                            İptal et
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table.Root>
        </ScrollArea>
        <ReactPaginate
          containerClassName='flex gap-2 justify-end mt-10'
          pageClassName='py-1 px-3 border rounded-lg'
          activeClassName={'bg-black text-white'}
          onPageChange={(event) => setPage(event.selected)}
          pageCount={Math.ceil(posts.length / records)}
          breakLabel={<LabelButton>{'...'}</LabelButton>}
          previousLabel={<LabelButton>{'<'}</LabelButton>}
          nextLabel={<LabelButton>{'>'}</LabelButton>}
        />
      </div>
    </div>
  );
};

const LabelButton = ({ children }) => {
  return (
    <button type='button' className='py-1 px-3 border rounded-lg'>
      {children}
    </button>
  );
};

export default VictimConfirmation;
