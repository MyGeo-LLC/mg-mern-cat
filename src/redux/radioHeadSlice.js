import { createSlice } from '@reduxjs/toolkit';

const initialState = Array.from({ length: 2 }, (_, id) => ({
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
  },
});

export const { setVolume, toggleMute } = radioHeadsSlice.actions;

export default radioHeadsSlice.reducer;
