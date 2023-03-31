import './index.css';
import RoutingComponent from './routing';
import React from 'react';
import { withProviders } from './providers/index';

const App = () => {
   return (
      <>
         <RoutingComponent />
      </>
   );
};

export default withProviders(App);
