"use client";
import React, { useState } from "react";
import { ICardProps } from "../../tds/ICardProps";
import style from "./card.module.scss";

export default function Card({
  id,
  word,
  definition,
  handleCard,
  suggested,
  obvious,
}: ICardProps) {
  const [isDefVisible, setDefVisible] = useState(false);

  return (
    <div className={style.card}>
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
  );
}
