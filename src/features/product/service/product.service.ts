import axios from 'axios';

const getProducts = async (search: string) => {
   const token = localStorage.getItem('access_token');
   const config = {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
   };
   const response = axios.get(`${process.env.REACT_APP_API_URL}/variations${search}`, config);
   return response;
};

const productService = {
   getProducts,
};
export default productService;
