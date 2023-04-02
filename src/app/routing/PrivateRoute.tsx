import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
   const token = localStorage.getItem('access_token');
   const isAuth = token;

   if (isAuth) {
      return <Outlet />;
   }
   return <Navigate to={'/login'} />;
};
