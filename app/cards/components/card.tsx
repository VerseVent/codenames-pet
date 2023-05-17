"use client";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";
import { ICardProps } from "../../../tds/ICardProps";
import style from "./card.module.scss";

export default function Card({
  id,
  roomId,
  word,
  definition,
  suggested,
  obvious,
  flipTime,
}: ICardProps) {
  const [isDefVisible, setDefVisible] = useState(false);
  const [isPending, setTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      cardContainerRef.current?.classList.add(style.card_flip);
    }, flipTime);
  }, []);

  const cardMode = () => {
    if (obvious) {
      return "obvious";
    }
    if (suggested) {
      return "suggested";
    }
    return "";
  };
  console.log(123);
  const handleCard = async (cardId: string, action: string) => {
    setIsFetching(true);

    await fetch(`http://localhost:3000/api/card/${roomId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, cardId }),
    });

    setIsFetching(false);

    setTransition(() => {
      console.log("Transition 1 time");
      router.refresh();
    });

    console.log(id, " + ", action);
  };

  const isMutating = isFetching || isPending;

  return (
    <figure
      className={
        isMutating
          ? `${style.card__figure} ${style.card_loading}`
          : `${style.card__figure}`
      }
    >
      <div className={style.card} ref={cardContainerRef}>
        <div className={style.card__actions}>
          <button onClick={() => handleCard(id, "suggested")}>❓</button>
          <button onClick={() => handleCard(id, "obvious")}>🧠</button>
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
