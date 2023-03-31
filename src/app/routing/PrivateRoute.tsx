import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
   const isAuth = false;

   if (isAuth) {
      return <Outlet />;
   }
   return <Navigate to={'/login'} />;
};
