import { Badge, ScrollArea, Table } from '@radix-ui/themes';
import { StatusTag } from './Information';

const InformationList = ({ posts }) => {
  return (
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
              İlan Durumu
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {posts.map((post) => {
            return (
              <Table.Row align={'center'}>
                <Table.RowHeaderCell justify={'center'}>
                  {post.name + ' ' + post.surname}
                </Table.RowHeaderCell>
                <Table.Cell justify={'center'}>{post.address}</Table.Cell>
                <Table.Cell justify={'center'}>{post.city}</Table.Cell>
                <Table.Cell justify={'center'}>{post.email}</Table.Cell>
                <Table.Cell justify={'center'}>{post.phoneNumber}</Table.Cell>
                <Table.Cell align='center'>
                  {/* <Badge color='green' size={'2'}>
                    Tamamlandi
                  </Badge> */}
                  <StatusTag statu={post.ilanDurumu} />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </ScrollArea>
  );
};

export default InformationList;
