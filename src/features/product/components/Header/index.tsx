import React from 'react';
import { InputBox, Nav } from './style';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Header = () => {
   return (
      <Nav>
         <InputBox placeholder="" prefix={<SearchOutlined />} />
         <Avatar
            shape="square"
            size={'large'}
            icon={<UserOutlined />}
            style={{ cursor: 'pointer' }}
         />
      </Nav>
   );
};

export default Header;
