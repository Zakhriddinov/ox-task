import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const common = css`
   transition: all 0.2s ease;
   font-family: 'Poppins';
   font-weight: 400;
   color: #131313;
   font-size: 16px;
   line-height: 4px;

   cursor: pointer;
   padding-left: 41px;
   border-left: 3px solid white;
   padding-top: 10px;
   padding-bottom: 10px;
   &:hover {
      color: #1677ff;
      border-left: 3px solid #1677ff;
   }
`;
const SidebarContainer = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   width: 250px;
   height: 100vh;
   background-color: #f8f8f8;
   padding: 55px 0;
   display: flex;
   flex-direction: column;
   .active {
      color: #1677ff;
      border-left: 3px solid #1677ff;
   }
`;

const Title = styled(Link)`
   text-decoration: none;
   font-weight: 700;
   font-family: 'Poppins';
   color: #1677ff;
   font-size: 20px;
   padding: 55px 41px;
`;
const Logout = styled.div`
   ${common}
   position: absolute;
   bottom: 30px;
`;
export const Links = styled(NavLink)`
   ${common}
   text-decoration: none;
`;
export { SidebarContainer, Title, Logout };
