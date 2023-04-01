import axios from 'axios';
import { API_URL } from '../../config';

export const apiInstance = axios.create({
   baseURL: API_URL,
   headers: {
      Accept: 'application/json',
   },
});
export function post(): any {
   throw new Error('Function not implemented.');
}
