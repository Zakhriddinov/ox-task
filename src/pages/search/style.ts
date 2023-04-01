import { Table, Pagination, Input } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
   background-color: white;
   height: 100%;
   display: flex;
   #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
   }

   #customers td,
   #customers th {
      border: 1px solid #ddd;
      padding: 8px;
   }

   #customers tr:nth-child(even) {
      background-color: #f2f2f2;
   }

   #customers tr:hover {
      background-color: #ddd;
   }

   #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #f2f2f2;
      color: black;
   }
`;

const ContentWrapper = styled.div`
   width: 80%;
   margin: 40px 40px 0 291px;
`;

const TableContainer = styled(Table)``;

const PaginationAnt = styled(Pagination)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 50px 0;
`;
export const InputAnt = styled(Input)`
   margin: 40px 0;
`;
export { TableContainer, PaginationAnt };

export { Container, ContentWrapper };
