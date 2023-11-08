import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counters/counterSlice";

export const store = configureStore({
  reducer: {
    counterMan: counterReducer,
  },
});
