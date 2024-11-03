import { configureStore } from '@reduxjs/toolkit';
import navReducer from './Slices/navSlice'; 
const store = configureStore({
  reducer: {
    navigation: navReducer,
  },
});

export default store;
