const getEnvVar = (key: string) => {
   if (process.env[key] === undefined) {
      throw new Error(`Env variable ${key} is required`);
   }
   return process.env[key] || '';
};

/* API entrypoint */
export const API_URL = getEnvVar('REACT_APP_API_URL');

/** program run mode */
export const NODE_ENV = getEnvVar('REACT_APP_NODE_ENV');
/** development mode */
export const isDevEnv = NODE_ENV === 'development';
/** production mode */
export const isProdEnv = NODE_ENV === 'production';
