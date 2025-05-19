import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards, CardsDetail } from "../models/cards";
import _ from "lodash";

const initialState: Cards = {
  cards: [],
  isOpen: false,
  isLoading: false,
  selectedCards: [],
};

export const cardsModule = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setData: (state, action: PayloadAction<Cards>) => {
      state.cards = action.payload.cards
    },
    addData: (state, action: PayloadAction<Cards>) => {
      state.cards = _.unionBy(state.cards.concat(action.payload.cards), "url");
    },
    setSelectedData: (state, action: PayloadAction<CardsDetail[]>) => {
      state.selectedCards = action.payload
    },
    deleteData: (state) => {
      state.cards = []
    },
    deleteSelectedData: (state, action: PayloadAction<CardsDetail>) => {
      state.selectedCards = state.selectedCards?.filter((a) => a.url === action.payload.url)
    },
    setDialog: (state, action: PayloadAction<boolean>) => {
      state.outImageDialog = action.payload
    }
  },
});
