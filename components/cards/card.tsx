"use client";
import React, { useEffect, useRef, useState } from "react";
import { ICardProps } from "../../tds/ICardProps";
import style from "./card.module.scss";

export default function Card({
  id,
  word,
  definition,
  handleCard,
  suggested,
  obvious,
  flipTime,
}: ICardProps) {
  const [isDefVisible, setDefVisible] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      console.log(flipTime);
      cardContainerRef.current?.classList.add(style.card_flip);
    }, flipTime);
  });

  return (
    <figure className={style.card__figure}>
      <div className={style.card} ref={cardContainerRef}>
        <div className={style.card__actions}>
          <button onClick={() => handleCard(id, "suggested")}>❓</button>
          <button onClick={() => handleCard(id, "obvious")}>✅</button>
        </div>
        <div
          className={
            suggested
              ? `${style.card__container} ${style.card__suggested}`
              : `${style.card__container}`
          }
        >
          <p className={style.card__heading}>{word}</p>
          <button onClick={() => setDefVisible(!isDefVisible)}>
            Definition {"->"}
          </button>

          {isDefVisible ? (
            <div className={style.card__def}>
              <p>{definition}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </figure>
  );
}
