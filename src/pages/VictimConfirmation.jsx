import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ScrollArea, Table } from '@radix-ui/themes';
import ReactPaginate from 'react-paginate';

import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';

import FormHeader from '../components/form/FormHeader';

import FormContext from '../context/form/FormContext';

const VictimConfirmation = () => {
  const { getList } = useContext(FormContext);
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const records = 8;

  const fetchList = async () => {
    const posts = await getList('/users/enkaz-altinda');
    setPosts(posts);

    const lastPage = Math.ceil(posts.length / records) - 1;

    if (page > lastPage) {
      setPage(lastPage);
    }

    setFilterData(
      posts.filter((item, index) => {
        return (index >= page * records) & (index < (page + 1) * records);
      })
    );
  };

  useEffect(() => {
    setBackgroundColorWhite();
    resetLocation();

    if (localStorage.getItem('officer') !== 'true') {
      navigate('/');
    }

    fetchList();
  }, [page, getList]);

  const descriptionText = (
    <p>
      Aşağıdaki listeden enkaz altında olan vatandaşlarımızın bilgilerini
      doğruladıktan sonra
      <span className='text-black'> Enkaz Altında Olanlar</span> bölümünde
      görünecektir.
    </p>
  );

  const handleConfirm = (e, id) => {
    e.preventDefault();

    fetch(`/officers/depremzede-onayla/${id}`, {
      method: 'PATCH',
    }).then(() => fetchList());
  };

  const handleCancel = (e, id) => {
    e.preventDefault();

    fetch(`/officers/cancel-request/${id}`, {
      method: 'DELETE',
    }).then(() => {
      fetchList();
    });
  };

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
                {/* <Table.ColumnHeaderCell justify={'center'}>
                  Şehir
                </Table.ColumnHeaderCell> */}
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
                    <Table.Row align={'center'} key={post._id}>
                      <Table.RowHeaderCell justify={'center'}>
                        {post.name}
                      </Table.RowHeaderCell>
                      <Table.Cell justify={'center'}>{post.address}</Table.Cell>
                      {/* <Table.Cell justify={'center'}>{post.city}</Table.Cell> */}
                      <Table.Cell justify={'center'}>{post.email}</Table.Cell>
                      <Table.Cell justify={'center'}>
                        {post.phoneNumber}
                      </Table.Cell>
                      <Table.Cell align='center'>
                        <div className='flex justify-center gap-2'>
                          <button
                            className='flex flex-col items-center justify-center h-8 w-20  py-2 px-4 bg-grey-1 hover:bg-black transition text-white rounded-lg'
                            onClick={(e) => handleConfirm(e, post._id)}
                          >
                            Doğrula
                          </button>
                          <button
                            className='flex flex-col items-center justify-center h-8 w-20  py-2 px-4 border border-grey-1 text-black hover:bg-black transition hover:text-white rounded-lg'
                            onClick={(e) => handleCancel(e, post._id)}
                          >
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
