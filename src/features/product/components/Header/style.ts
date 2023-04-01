import styled from 'styled-components';
import { Input } from 'antd';

const Nav = styled.nav`
   margin: 56px 0 43px 0;
   display: flex;
   justify-content: space-between;
`;

const InputBox = styled(Input)`
   border: 1px solid rgba(0, 0, 0, 0.2);
   border-radius: 3px;
   max-width: 655px;
   width: 100%;
   height: 40px;
`;

export { Nav, InputBox };
