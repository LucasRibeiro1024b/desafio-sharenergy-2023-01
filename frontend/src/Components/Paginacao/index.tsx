import React from "react";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';



function Paginacao(){

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

return(
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    )
}

export default Paginacao