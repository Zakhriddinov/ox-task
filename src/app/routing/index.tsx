import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';
import { routes } from './route.config';
import { dom } from '../../shared/helpers';
import { PrivateRoute } from './PrivateRoute';

const useResetScrollAltEveryPage = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      dom.scroolToTop();
   }, [pathname]);
   return null;
};

const RoutingComponent = () => {
   useResetScrollAltEveryPage();
   return (
      <Routes>
         {routes.map((route, i) => {
            return (
               <Route key={i} element={route.private && <PrivateRoute />}>
                  <Route path={route.path} element={route.element}>
                     {route?.children?.map((subRoute) => (
                        <Route
                           key={subRoute.path}
                           index={subRoute.index}
                           path={subRoute.path}
                           element={subRoute.element}
                        />
                     ))}
                  </Route>
               </Route>
            );
         })}
      </Routes>
   );
};

export default RoutingComponent;
