import './index.css';
import RoutingComponent from './routing';
import React from 'react';
import { withProviders } from './providers/index';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
   const queryClient = new QueryClient();
   return (
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <RoutingComponent />
         </QueryClientProvider>
      </Provider>
   );
};

export default withProviders(App);
