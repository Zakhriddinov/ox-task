import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductDocument } from './models/product.inteface';
import productService from './service/product.service';

interface AsyncState {
   isLoading: boolean;
   isError: boolean;
   isSuccess: boolean;
}
interface ProductState extends AsyncState {
   products: ProductDocument[];
}
const initialState: ProductState = {
   products: [],
   isLoading: false,
   isSuccess: false,
   isError: false,
};

export const getProducts = createAsyncThunk('product', async (search: string) => {
   try {
      return await productService.getProducts(search);
   } catch (error) {
      console.log('Error', error);
   }
});
export const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload?.data || [];
         })
         .addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.products = [];
         });
   },
});

export default productSlice.reducer;
