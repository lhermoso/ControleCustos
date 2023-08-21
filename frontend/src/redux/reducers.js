import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import BaseApi from './api/BaseApi';

const reducers = combineReducers({
  user: userReducer,
  auth: authReducer,
  [BaseApi.reducerPath]: BaseApi.reducer,
});

export default reducers;
