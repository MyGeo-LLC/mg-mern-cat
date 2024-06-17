import { configureStore } from '@reduxjs/toolkit';
import radioHeadsReducer from './radioHeadSlice';

const store = configureStore({
  reducer: {
    radioHeads: radioHeadsReducer,
  },
});

store.subscribe(() => {
  // Assuming 'saveSettings' is a proper action creator and is available from radioHeadsSlice
  const { saveSettings } = require('./radioHeadSlice').default.actions;
  store.dispatch(saveSettings());
});

export default store;
