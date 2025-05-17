import { configureStore } from '@reduxjs/toolkit';
import pagestateReducer from "./page";
import pageselectionReducer from "./pageSelection"

export const store = configureStore({
  reducer: {
    pageState: pagestateReducer,
    pageSelection: pageselectionReducer,
  },
});
