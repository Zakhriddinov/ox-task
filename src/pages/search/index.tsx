import React, { useEffect, useState } from 'react';
import Sidebar from './../../widgets/sidebar/ui';
import { Container, ContentWrapper, InputAnt } from './style';
import { getProducts } from '../../features/product/productSlice';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';

let correctIndex: number | undefined;
const SearchPage = () => {
   const { search } = useLocation();
   const [value, setValue] = useState('');
   const { products } = useAppSelector((state) => state.products);
   const [filtered, setFiltered] = useState(products?.items);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getProducts(search));
   }, [search]);

   useEffect(() => {
      if (value !== '') {
         const res = products?.items.filter((item: { name: string }, index: number) => {
            if (item.name.toLocaleLowerCase().startsWith(value)) {
               correctIndex = value.length;
               return item.name.toLowerCase().startsWith(value);
            } else {
               return item.name.toLowerCase().startsWith(value.substring(0, correctIndex));
            }
         });
         setFiltered(res);
      } else {
         setFiltered(products?.items);
      }
   }, [value, correctIndex]);

   return (
      <Container>
         <Sidebar />
         <ContentWrapper>
            <InputAnt
               placeholder="Search product"
               onChange={(e) => setValue(e.target.value)}
               value={value}
            />
            <table id="customers">
               <thead>
                  <tr>
                     <th>Id</th>
                     <th>Name</th>
                  </tr>
               </thead>
               <tbody>
                  {filtered?.map(
                     (item: {
                        id:
                           | string
                           | number
                           | boolean
                           | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                           | React.ReactFragment
                           | React.ReactPortal
                           | null
                           | undefined;
                        name:
                           | string
                           | number
                           | boolean
                           | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                           | React.ReactFragment
                           | React.ReactPortal
                           | null
                           | undefined;
                     }) => (
                        <tr>
                           <td>{item?.id}</td>
                           <td>{item?.name}</td>
                        </tr>
                     ),
                  )}
               </tbody>
            </table>
         </ContentWrapper>
      </Container>
   );
};

export default SearchPage;
