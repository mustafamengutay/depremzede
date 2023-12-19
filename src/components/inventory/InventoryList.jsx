import { useContext, useEffect, useState } from 'react';
import { ScrollArea, Table } from '@radix-ui/themes';
import ReactPaginate from 'react-paginate';

import FormContext from '../../context/form/FormContext';

const OfficerRequestList = ({ posts }) => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState([]);
  const records = 8;

  const { searchBarValue } = useContext(FormContext);

  useEffect(() => {
    setFilterData(
      posts.filter((item, index) => {
        return (index >= page * records) & (index < (page + 1) * records);
      })
    );
  }, [page, posts]);

  const filteredInventory = filterData.filter((inventory) => {
    if (searchBarValue === '') {
      return inventory;
    } else {
      const info = inventory.inventoryName;
      return info.toLowerCase().includes(searchBarValue);
    }
  });

  const handleConfirm = (e, id) => {
    e.preventDefault();

    // fetch(``, {
    //   method: 'PATCH',
    // });
  };

  const handleCancel = (e, id) => {
    e.preventDefault();

    // fetch(``, {
    //   method: 'DELETE',
    // });
  };

  return (
    <div>
      <ScrollArea scrollbars='horizontal' size='1' type='auto' radius='full'>
        <Table.Root size={'2'}>
          <Table.Header>
            <Table.Row align={'center'}>
              <Table.ColumnHeaderCell justify={'center'}>
                Ürün Adı
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Kategori
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Ürün Türü
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Adet Sayısı
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Açıklama
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Durum
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredInventory.map((post) => {
              return (
                <Table.Row align={'center'} key={post._id}>
                  <Table.RowHeaderCell justify={'center'}>
                    {post.inventoryName}
                  </Table.RowHeaderCell>
                  <Table.Cell justify={'center'}>{post.category}</Table.Cell>
                  <Table.Cell justify={'center'}>{post.type}</Table.Cell>
                  <Table.Cell justify={'center'}>{post.stock}</Table.Cell>
                  <Table.Cell justify={'center'}>{post.description}</Table.Cell>
                  <Table.Cell align='center'>
                    <button
                      className='flex flex-col items-center justify-center h-8 w-20  py-2 px-4 bg-grey-1 hover:bg-black transition text-white rounded-lg'
                      onClick={(e) => handleConfirm(e, post._id)}
                    >
                      Azalt
                    </button>
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

export default OfficerRequestList;
