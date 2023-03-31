import { lazy } from 'react';

export interface IRouteType {
   path: string;
   element: JSX.Element;
   index?: boolean;
}
export interface IRoute {
   path: string;
   element: JSX.Element;
   children?: IRouteType[];
   title?: string;
}

const HomePage = lazy(() => import('../../pages/home'));
const AuthPage = lazy(() => import('../../pages/auth'));

export const routes: IRoute[] = [
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/login',
      element: <AuthPage />,
   },
];
