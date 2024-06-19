import { configureStore } from '@reduxjs/toolkit';
import radioHeadsReducer from './radioHeadSlice';

const store = configureStore({
  reducer: {
    radioHeads: radioHeadsReducer,
  },
});

export default store;
