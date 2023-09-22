import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 10000) {
        state.count = 50;
      } else {
        state.count -= 1;
      }
    },
    division: (state) => {
      state.count /= 0.5;
    },
    multiplication: (state) => {
      state.count *= 10;
    },
  },
});

export const { increment, decrement, division, multiplication } =
  counterSlice.actions;
export default counterSlice.reducer;
