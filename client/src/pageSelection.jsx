// modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pageSelection = createSlice({
  name: 'modal',
  initialState: {
    ispageSelection: "All",
  },
  reducers: {
    setpageSelection: (state, action) => {
      state.ispageSelection = action.payload;
    },
  },
});

export const { setpageSelection } = pageSelection.actions;
export default pageSelection.reducer;
