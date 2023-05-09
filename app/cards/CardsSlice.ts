import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../tds/ICards";

export interface CardsState {
  cards: Array<ICard>;
}

const initialState: CardsState = {
  cards: [
    {
      id: 1,
      word: "Дорога",
      suggested: false,
      obvious: false,
      definition:
        "Определе́ние, дефини́ция — утверждение смысла слова или фразы;",
    },
    {
      id: 2,
      word: "Асфальт",
      suggested: false,
      obvious: false,
      definition:
        "Определе́ние, дефини́ция — утверждение смысла слова или фразы;",
    },
    {
      id: 3,
      word: "Джаз",
      suggested: false,
      obvious: false,
      definition:
        "Определе́ние, дефини́ция — утверждение смысла слова или фразы;",
    },
    {
      id: 4,
      word: "Снег",
      suggested: false,
      obvious: false,
      definition:
        "Определе́ние, дефини́ция — утверждение смысла слова или фразы;",
    },
    {
      id: 5,
      word: "Виски",
      suggested: false,
      obvious: false,
      definition:
        "Определе́ние, дефини́ция — утверждение смысла слова или фразы;",
    },
  ],
};
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setSuggested: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload) {
          card.obvious = false;
          card.suggested = !card.suggested;
          return card;
        }
        return card;
      });
    },
    setObvious: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload) {
          card.suggested = false;
          card.obvious = !card.obvious;
          return card;
        }
        return card;
      });
    },
    // findCardById(cards: Array<ICard>, action: PayloadAction<number>) {

    // },
  },
});

export const cardsReducer = cardsSlice.reducer;

export const { setSuggested, setObvious } = cardsSlice.actions;
