import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('radioHeads')) || Array.from({ length: 40 }, (_, id) => ({
  id: id.toString(),
  incomingVolume: 50,
  outgoingVolume: 50,
  masterVolume: 50,
  isMuted: false,
}));

const radioHeadsSlice = createSlice({
  name: 'radioHeads',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      const { id, type, value } = action.payload;
      const radioHead = state.find(head => head.id === id);
      if (radioHead) {
        radioHead[`${type}Volume`] = value;
      }
    },
    toggleMute: (state, action) => {
      const id = action.payload;
      const radioHead = state.find(head => head.id === id);
      if (radioHead) {
        radioHead.isMuted = !radioHead.isMuted;
      }
    },
    saveSettings: (state) => {
      localStorage.setItem('radioHeads', JSON.stringify(state));
    },
  },
});

export const { setVolume, toggleMute, saveSettings } = radioHeadsSlice.actions;

export default radioHeadsSlice.reducer;
