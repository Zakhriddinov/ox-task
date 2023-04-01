import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Jwt } from './models/Jwt';
import { LoginUser } from './models/loginuser.interface';
import authService from './service/auth.service';
import { message } from 'antd';

const storedJwt: string | null = localStorage.getItem('access_token');
const jwt: any = !!storedJwt ? storedJwt : null;

interface AsyncState {
   isLoading: boolean;
   isSuccess: boolean;
   isError: boolean;
   status: string;
}

interface AuthState extends AsyncState {
   jwt?: Jwt;
   isAuthenticated?: boolean;
}

const initialState: AuthState = {
   isLoading: false,
   isSuccess: false,
   status: '',
   isError: false,
   isAuthenticated: false,
   jwt: jwt,
};

export const login = createAsyncThunk('auth/login', async (user: LoginUser, thunkAPI) => {
   try {
      return await authService.login(user);
   } catch (error) {
      return thunkAPI.rejectWithValue(error);
   }
});

export const logout = createAsyncThunk('auth/logout', async () => {
   await authService.logout();
});

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      reset: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.pending, (state) => {
            state.isLoading = true;
            state.status = 'pending';
         })
         .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jwt = action.payload.jwt;
            state.isAuthenticated = true;
            state.status = 'fulfilled';
            message.info('You passed successfully');
         })
         .addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.isAuthenticated = false;
            state.status = 'rejected';
            message.error('user not available');
         });
   },
});

export const selectedUser = (state: RootState) => {
   return state.auth;
};
export const { reset } = authSlice.actions;
export default authSlice.reducer;
