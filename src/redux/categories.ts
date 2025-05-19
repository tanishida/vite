import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Caterogires, CategoryDetail } from "../models/categories";

const initialState: Caterogires = {
  categories: [],
}

export const categoriesModule = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Caterogires>) => {
      state.categories = action.payload.categories.filter((a) => a.value !== "");
    },
    setSelected: (state, action: PayloadAction<CategoryDetail>) => {
      state.selectedCategory = action.payload
    },
    setSelectedMultipleData: (state, action: PayloadAction<CategoryDetail[]>) => {
      state.selectedMultipleCategory = action.payload
    },
    clearSelectedMultipleData: (state) => {
      state.selectedMultipleCategory = undefined
    }
  },
});
