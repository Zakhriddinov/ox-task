import styled from 'styled-components';
import { Table, Pagination } from 'antd';

const TableContainer = styled(Table)``;

const PaginationAnt = styled(Pagination)`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 50px 0;
`;

export { TableContainer, PaginationAnt };
