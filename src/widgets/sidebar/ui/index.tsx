import { Links, Logout, SidebarContainer, Title } from './style';
import { LogoutOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { logout, reset } from '../../../features/auth/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const logoutHandler = () => {
      dispatch(logout());
      navigate('/login');
   };

   return (
      <SidebarContainer>
         <Title to={'/'}>OX SYSTEM</Title>
         <Links
            className={({ isActive, isPending }) =>
               isPending ? 'pending' : isActive ? 'active' : ''
            }
            to="/"
         >
            Product List
         </Links>
         <Links to="/search">Search List</Links>
         <Logout onClick={logoutHandler}>
            <LogoutOutlined /> Logout
         </Logout>
      </SidebarContainer>
   );
};

export default Sidebar;
