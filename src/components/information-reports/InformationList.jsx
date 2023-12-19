import { ScrollArea, Table } from '@radix-ui/themes';
import { StatusTag } from './Information';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

const InformationList = ({ posts }) => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const records = 8;

  useEffect(() => {
    setFilterData(
      posts.filter((item, index) => {
        return (index >= page * records) & (index < (page + 1) * records);
      })
    );
  }, [page, posts]);

  return (
    <div>
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
                E-posta
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Telefon Numarası
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                İlan Durumu
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filterData &&
              filterData.map((post) => {
                return (
                  <Table.Row align={'center'}>
                    <Table.RowHeaderCell justify={'center'}>
                      {post.name + ' ' + post.surname}
                    </Table.RowHeaderCell>
                    <Table.Cell justify={'center'}>{post.address}</Table.Cell>
                    <Table.Cell justify={'center'}>{post.email}</Table.Cell>
                    <Table.Cell justify={'center'}>
                      {post.phoneNumber}
                    </Table.Cell>
                    <Table.Cell align='center'>
                      <StatusTag statu={post.ilanDurumu} />
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
  );
};

const LabelButton = ({ children }) => {
  return (
    <button type='button' className='py-1 px-3 border rounded-lg'>
      {children}
    </button>
  );
};

export default InformationList;
