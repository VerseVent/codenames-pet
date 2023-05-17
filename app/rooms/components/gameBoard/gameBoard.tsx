"use client";
import { ICard } from "@tds/ICards";
import React from "react";
import Card from "../card/card";
import style from "./card.module.scss";

type Props = {
  cards: ICard[];
  roomId: string;
};

const GameBoard = ({ cards, roomId }: Props) => {
  const flipTime = 250;

  return (
    <div className={style.card__container}>
      {cards.map((card, i) => (
        <Card
          id={card._id}
          key={card._id}
          roomId={roomId}
          word={card.word}
          flipTime={flipTime * (i + 1)}
          definition={card.definition}
          suggested={card.suggested}
          obvious={card.obvious}
        />
      ))}
      ;
    </div>
  );
};

export default GameBoard;
