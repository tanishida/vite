import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "../models/cards";

const initialState: Cards = {
  cards: [],
  selectedCards: []
};

export const cardsModule = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Cards>) => {
      state.cards = action.payload.cards
    },
    setSelectedData: (state, action: PayloadAction<{
      name: string;
      url: string;
  }[]>) => {
      state.selectedCards = action.payload
    },
    deleteSelectedData: (state, action: PayloadAction<{
      name: string;
      url: string;
  }>) => {
      state.selectedCards = state.selectedCards?.filter((a) => a.url === action.payload.url)
    },
  },
});
