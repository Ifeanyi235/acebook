import { createSlice } from '@reduxjs/toolkit';

const pageState = createSlice({
  name: 'modal',
  initialState: {
    ispageState: 'home',
  },
  reducers: {
    setpageState: (state, action) => {
      state.ispageState = action.payload;
    },
  },
});

export const { setpageState } = pageState.actions;
export default pageState.reducer;
