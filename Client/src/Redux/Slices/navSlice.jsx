import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    activeItem: 'Dashboard', 
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = navigationSlice.actions;
export default navigationSlice.reducer;
