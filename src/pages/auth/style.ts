import styled from 'styled-components';
import { Form } from 'antd';

export const PageAuth = styled.div``;

const Content = styled.div`
   margin: 100px auto;
   max-width: 400px;
   width: 100%;
   height: 450px;
   background: #ffffff;
   box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1), 0px 8px 53px rgba(0, 120, 240, 0.25);
   border-radius: 10px;
   h2 {
      font-size: 30px;
      text-align: center;
      font-family: 'Roboto';
      font-weight: 700;
      color: #1677ff;
   }
   padding-top: 40px;
`;
export const FormWrapper = styled(Form)`
   margin: 20px 70px;
   width: 400px;
`;
export { Content };
