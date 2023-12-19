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

  const filteredInventory = filterData.filter((officer) => {
    if (searchBarValue === '') {
      return officer;
    } else {
      const info = officer.name;
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
            <Table.Row>
              <Table.ColumnHeaderCell justify={'center'}>
                ID
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Görevli Adı
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Telefon Numarası
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                E-posta
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Doğum Tarihi
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Geldiği Şehir
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Atandığı Bölge
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell justify={'center'}>
                Bilgileri Güncelle
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredInventory.map((post, index) => {
              return (
                <Table.Row align={'center'} key={post._id}>
                  <Table.RowHeaderCell justify={'center'}>
                    {index}
                  </Table.RowHeaderCell>
                  <Table.RowHeaderCell justify={'center'}>
                    {post.name + ' ' + post.surname}
                  </Table.RowHeaderCell>
                  <Table.Cell justify={'center'}>{post.phoneNumber}</Table.Cell>
                  <Table.Cell justify={'center'}>{post.email}</Table.Cell>
                  <Table.Cell justify={'center'}>{post.dataOfBirth}</Table.Cell>
                  <Table.Cell justify={'center'}>
                    {post.comeFromCity}
                  </Table.Cell>
                  <Table.Cell justify={'center'}>
                    {post.resposibleFromCity}
                  </Table.Cell>
                  <Table.Cell align='center'>
                    <button
                      className='flex flex-col items-center justify-center h-8 w-20  py-2 px-4 bg-grey-1 hover:bg-black transition text-white rounded-lg'
                      onClick={(e) => handleConfirm(e, post._id)}
                    >
                      Güncelle
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
