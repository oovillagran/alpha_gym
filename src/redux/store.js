import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './exercises/aboutSlice';

const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});

export default store;
