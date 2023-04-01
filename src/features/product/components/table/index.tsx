import { useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { ProductDocument } from '../../models/product.inteface';
import { PaginationAnt, TableContainer } from './style';
import { useNavigate, useLocation } from 'react-router-dom';
import { uzeReplace } from '../../../../shared/hooks/useReplace';
import { getProducts } from '../../productSlice';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux';

const TableComponent = () => {
   const { search } = useLocation();

   const dispatch = useAppDispatch();
   const { products } = useAppSelector((state) => state.products);
   const columns: ColumnsType<ProductDocument> = [
      {
         title: 'id',
         dataIndex: 'id',
      },
      {
         title: 'Product Name',
         dataIndex: 'productName',
      },
      {
         title: 'writeOffMethod',
         dataIndex: 'writeOffMethod',
      },
      {
         title: 'Unit',
         dataIndex: 'unit',
      },
      {
         title: 'Barcode',
         dataIndex: 'barcode',
      },
      {
         title: 'Sku',
         dataIndex: 'sku',
      },
   ];
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(getProducts(search));
   }, [search]);

   const onChange = (pageNum: any) => {
      navigate(`/${uzeReplace('page', pageNum)}`);
   };
   return (
      <>
         <TableContainer
            columns={columns}
            dataSource={products.items}
            bordered
            pagination={false}
            scroll={{
               y: 500,
            }}
         />
         <PaginationAnt
            defaultCurrent={1}
            total={120}
            current={products?.page}
            onChange={onChange}
         />
      </>
   );
};

export default TableComponent;
