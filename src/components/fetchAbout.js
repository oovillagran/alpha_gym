import { createAsyncThunk } from '@reduxjs/toolkit';

const aboutURL = 'https://api.spacexdata.com/v3/missions';

const fetchAbout = createAsyncThunk('about/fetch', async () => {
  const response = await fetch(aboutURL);
  const data = await response.json();
  return data.map((about) => ({
    about_id: about.mission_id,
    about_name: about.mission_name,
    description: about.description,
  }));
});

export default fetchAbout;
