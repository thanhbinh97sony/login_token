import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';

const rootReducer = {
  counter: counterSlice,
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
