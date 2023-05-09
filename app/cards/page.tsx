"use client";
import { Metadata } from "next";
import { useRef } from "react";
import Card from "../../components/cards/card";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Actions } from "../../tds/ICards";
import style from "./card.module.scss";
import { setObvious, setSuggested } from "./CardsSlice";

export const metadata: Metadata = {
  title: "Cards",
  description:
    "This is a meta description. Welcome to codenames cards. Happy coding and have a nice day",
};

export default function Cards() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cardsReducer.cards);
  const flipTime = useRef(250);

  const handleCardState = (cardId: number, action: Actions) => {
    if (action === "suggested") {
      return dispatch(setSuggested(cardId));
    }
    dispatch(setObvious(cardId));
  };
  return (
    <>
      <div className={style.card__container}>
        {cards.map((e, i) => (
          <Card
            id={e.id}
            word={e.word}
            flipTime={flipTime.current * (i + 1)}
            definition={e.definition}
            key={e.id}
            suggested={e.suggested}
            obvious={e.obvious}
            handleCard={handleCardState}
          />
        ))}
      </div>
    </>
  );
}
