import { configureStore } from '@reduxjs/toolkit';
import radioHeadsReducer from './redux/radioHeadsSlice';

const store = configureStore({
  reducer: {
    radioHeads: radioHeadsReducer,
  },
});

store.subscribe(() => {
  store.dispatch({ type: 'radioHeads/saveSettings' });
});

export default store;
