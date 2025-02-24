import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Caterogires } from "../models/categories";

const initialState: Caterogires = {
  categories: []
}

export const categoriesModule = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Caterogires>) => {
      state.categories = action.payload.categories ;
    },
  },
});
