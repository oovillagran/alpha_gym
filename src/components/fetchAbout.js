import { createAsyncThunk } from '@reduxjs/toolkit';

const aboutURL = 'https://api.spacexdata.com/v3/missions';

const fetchAbout = createAsyncThunk('about/fetch', async () => {
  const response = await fetch(aboutURL);
  const data = await response.json();
  return data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
});

export default fetchAbout;
