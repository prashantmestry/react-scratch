import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/HomeReducer';
//
const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
