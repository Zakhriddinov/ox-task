import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnivoronmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), , tsconfigPaths(), EnivoronmentPlugin('all', { prefix: 'REACT_APP_' })],
   resolve: {
      alias: [
         {
            find: '~antd',
            replacement: 'antd',
         },
      ],
   },
   server: {
      port: 3000,
      open: '/',
      host: true,
   },
});
