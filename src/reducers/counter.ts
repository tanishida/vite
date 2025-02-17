import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + action.payload;
    },
    decrement: (state) => {
      return state - 1;
    },
  },
});

export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;