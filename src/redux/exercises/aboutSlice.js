import { createSlice } from '@reduxjs/toolkit';
import fetchAbout from '../../components/fetchAbout';

const initialState = {
  about: [],
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }));
  },
});

export default aboutSlice.reducer;
