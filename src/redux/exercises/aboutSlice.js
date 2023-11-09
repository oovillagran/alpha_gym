import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  about: [],
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
