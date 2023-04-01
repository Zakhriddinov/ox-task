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
   private?: boolean;
}

const HomePage = lazy(() => import('../../pages/home'));
const AuthPage = lazy(() => import('../../pages/auth'));
const SearchPage = lazy(() => import('../../pages/search'));

export const routes: IRoute[] = [
   {
      path: '/',
      element: <HomePage />,
      private: true,
   },
   {
      path: '/login',
      element: <AuthPage />,
      private: false,
   },
   {
      path: '/search',
      element: <SearchPage />,
      private: true,
   },
];
