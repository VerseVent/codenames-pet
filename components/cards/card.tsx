"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  }, []);

  const cardMode = useMemo(() => {
    if (obvious) {
      return "obvious";
    }
    if (suggested) {
      return "suggested";
    }
    return "";
  }, [obvious, suggested]);

  return (
    <figure className={style.card__figure}>
      <div className={style.card} ref={cardContainerRef}>
        <div className={style.card__actions}>
          <button onClick={() => handleCard(id, "suggested")}>❓</button>
          <button onClick={() => handleCard(id, "obvious")}>🧠</button>
          <button>✅</button>
        </div>
        <div
          className={
            cardMode
              ? `${style.card__container} ${style["card_" + cardMode]} ${
                  style.card__moded
                } `
              : `${style.card__container}`
          }
        >
          <p className={style.card__heading}>{word}</p>
          <div>
            <button
              className={style.card__defBtn}
              onClick={() => setDefVisible(!isDefVisible)}
            >
              Definition {"->"}
            </button>

            {isDefVisible ? (
              <div className={`${style.card__def} ${style.card__def_up}`}>
                <p>{definition}</p>
              </div>
            ) : (
              <div className={style.card__def}>
                <p>{definition}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </figure>
  );
}
