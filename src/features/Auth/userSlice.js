import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StogareKeys from 'constants/storage-keys';

export const register = createAsyncThunk('users/register', async (payload) => {
  //call api to register
  const data = await userApi.register(payload);
  //save data to local storage
  localStorage.setItem(StogareKeys.TOKEN, data.jwt);
  localStorage.setItem(StogareKeys.USER, JSON.stringify(data.user));
  //return user data
  return data.user;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  //call api to register
  const data = await userApi.login(payload);
  //save data to local storage
  localStorage.setItem(StogareKeys.TOKEN, data.jwt);
  localStorage.setItem(StogareKeys.USER, JSON.stringify(data.user));
  //return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StogareKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      //remove localstorage
      localStorage.removeItem(StogareKeys.USER);
      localStorage.removeItem(StogareKeys.TOKEN);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer;
