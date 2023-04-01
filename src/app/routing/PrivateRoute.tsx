import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
   const token = localStorage.getItem('access_token');
   const isAuth = token;

   if (isAuth) {
      return <Outlet />;
   }
   return <Navigate to={'/login'} />;
};
