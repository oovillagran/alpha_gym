import { createSlice } from '@reduxjs/toolkit';
import fetchAbout from '../../components/fetchAbout';

const initialState = {
  missions: [],
};

export const aboutSlice = createSlice({
  name: 'missions',
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
