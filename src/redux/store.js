import { configureStore } from '@reduxjs/toolkit';
import radioHeadsReducer from './radioHeadSlice';

const store = configureStore({
  reducer: {
    radioHeads: radioHeadsReducer,
  },
});

store.subscribe(() => {
  const { saveSettings } = require('./radioHeadSlice').default.actions;
  store.dispatch(saveSettings());
});

export default store;
