import { Pagination, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/es/table';
import { ReactElement } from 'react';
import S from "../Container/index"

type TabelaProps<T> = TableProps<T> & {
  dados: Array<T>;
  onShowSizeChange?: (page: number, pageSize: number) => void;
  colunas: ColumnsType<T>;
  params : TablePaginationConfig
};

function Tabela<T extends object = never>({
  colunas,
  dados,
  onChange,
  params,
  onShowSizeChange,
  ...rest
}: TabelaProps<T>): ReactElement {
  const col = colunas.map(col => {
    return col;
  });
  return (
  <div style={{display:"flex", flexDirection:"column",justifyContent:'center'}}>
    <Table
      rowKey={'id'}
      pagination={false}
      columns={col}
      bordered
      dataSource={dados}
      scroll={{ y: 'calc(100vh - 300px)' }}
      style={{ minHeight: 400 }}
      size={'large'}
      {...rest}
    />
   <S.ContainerPaginacao>
      <Pagination
          showSizeChanger
          pageSizeOptions={['10', '20', '25', '50']}
          pageSize={params.pageSize || 10}
          current={params.current || 1}
          onChange={onShowSizeChange}
          defaultPageSize={1}
          total={params?.total}
        />
    </S.ContainerPaginacao>
</div>
  );
}

export default Tabela;
