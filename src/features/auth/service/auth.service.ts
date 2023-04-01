import axios from 'axios';
import { LoginUser } from '../models/loginuser.interface';
import jwt_decode from 'jwt-decode';
import { DecodedJwt } from '../models/decoded.interface';
import { API_URL } from '../../../shared/config';

const login = async (user: LoginUser) => {
   const config = {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json',
      },
   };
   const response = axios.post(
      `${API_URL}/security/auth_check`,
      user,
      config,
   );

   if ((await response).data) {
      localStorage.setItem('access_token', (await response)?.data.token);
      const decodedJwt: DecodedJwt = jwt_decode((await response).data.token);
      return { jwt: (await response).data, user: null };
   }
   return { jwt: (await response).data.token, user: null };
};

const logout = () => localStorage.removeItem('access_token');

const authService = {
   login,
   logout,
};
export default authService;
