import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {API} from '../../api';

export interface UserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface AuthState {
  userData: UserData | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

const initialState: AuthState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:undefined
};

export const login = createAsyncThunk<UserData, LoginParams, { rejectValue: string }>(
  'auth/login',
  async (params: LoginParams, thunkApi) => {
    try {
      const response = await API.post('auth/login', params);
      return response.data as UserData;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.response?.data?.message || err.message);
    }
  },
);

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: state => {
      state.userData = null;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = undefined;
    },

    clearError: state => {
      state.isError = false;
      state.errorMessage = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<UserData>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userData = action.payload;
      },
    );
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.userData = null;
      state.errorMessage  = action.payload as string;
    });
  },
});

export default AuthSlice.reducer;
export const {logout} = AuthSlice.actions;
export const {clearError} = AuthSlice.actions;