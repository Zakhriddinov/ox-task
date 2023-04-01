import axios from 'axios';
import { API_URL } from '../../../shared/config';

const getProducts = async (search: string) => {
   const token = localStorage.getItem('access_token');
   const config = {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
   };
   const response = axios.get(`${API_URL}/variations${search}`, config);
   return response;
};

const productService = {
   getProducts,
};
export default productService;
