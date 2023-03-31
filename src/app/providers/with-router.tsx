import { Spin } from 'antd';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => ReactNode) => () => {
   return (
      <BrowserRouter>
         <Suspense fallback={<Spin size="large" className="overlay" delay={300} />}>
            {component()}
         </Suspense>
      </BrowserRouter>
   );
};
