import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./../app/cards/CardsSlice";
import { createWrapper } from "next-redux-wrapper";

const reducer = combineReducers({
  cardsReducer,
});

export const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

//TODO: Error with wrapper, need fixes with node module ()
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
