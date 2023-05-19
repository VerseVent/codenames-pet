"use client";
import { ICard } from "@tds/ICards";
import React, { useState } from "react";
import Card from "../card/card";
import style from "./gameBoard.module.scss";

type Props = {
  cards: ICard[];
  roomId: string;
};

const GameBoard = ({ cards, roomId }: Props) => {
  const flipTime = 250;

  const [initialCards, setInitialCards] = useState([...cards]);

  const handleCard = (card: ICard) => {
    setInitialCards((prevCards) =>
      prevCards.map((prevCard) => (prevCard._id === card._id ? card : prevCard))
    );
  };

  return (
    <div className={style.gameBoard__grid}>
      <div className={style.gameBoard__container}>
        {initialCards.map((card, i) => (
          <Card
            id={card._id}
            key={card._id}
            changeCard={handleCard}
            roomId={roomId}
            word={card.word}
            flipTime={flipTime * (i + 1)}
            definition={card.definition}
            suggested={card.suggested}
            obvious={card.obvious}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
