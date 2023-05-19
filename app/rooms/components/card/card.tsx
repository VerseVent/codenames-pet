"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { ICardProps } from "../../../../tds/ICardProps";
import style from "./card.module.scss";
import { patchCardById } from "@app/lib/patchCardById";
import { Actions } from "@tds/ICards";
import { useRouter } from "next/navigation";

export default function Card({
  id,
  roomId,
  word,
  definition,
  changeCard,
  suggested,
  obvious,
  flipTime,
}: ICardProps) {
  const [isDefVisible, setDefVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const count = useRef(0);
  useEffect(() => {
    setTimeout(() => {
      cardContainerRef.current?.classList.add(style.card_flip);
    }, flipTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    count.current += 1;
    console.log("Renders: ", count);
  });

  const cardMode = () => {
    if (obvious) {
      return "obvious";
    }
    if (suggested) {
      return "suggested";
    }
    return "";
  };

  const handleCard = async (cardId: string, action: Actions) => {
    setIsFetching(true);
    const changedCard = await patchCardById(roomId, action, cardId);

    changeCard(changedCard);

    setIsFetching(false);

    // startTransition(() => {
    // router.refresh();
    // });
  };

  return (
    <figure
      className={
        isFetching
          ? `${style.card__figure} ${style.card_loading}`
          : `${style.card__figure}`
      }
    >
      <div className={style.card} ref={cardContainerRef}>
        <div className={style.card__actions}>
          <button onClick={() => handleCard(id, Actions.suggested)}>❓</button>
          <button onClick={() => handleCard(id, Actions.obvious)}>🧠</button>
          <button>✅</button>
        </div>
        <div
          className={
            cardMode()
              ? `${style.card__container} ${style["card_" + cardMode()]} ${
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
