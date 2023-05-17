import Card from "@/app/cards/components/card";
import { ICard } from "@/tds/ICards";
import { getRoomById } from "@app/lib/getRoomById";
import { Metadata } from "next";
import style from "./card.module.scss";

type Params = {
  params: {
    roomId: string;
  };
};

type IRoomResponse = {
  room: {
    _id: string;
    title: string;
    cards: ICard[];
  };
};

export const metadata: Metadata = {
  title: "Game Room",
  description:
    "This is a meta description. Welcome to codenames cards. Happy coding and have a nice day",
};

export default async function RoomPage({ params: { roomId } }: Params) {
  const flipTime = 250;
  const initialCards = [];
  const {
    room: { _id, title, cards },
  }: IRoomResponse = await getRoomById(roomId);

  return (
    <>
      <h2>Room: {title}</h2>
      <div className={style.card__container}>
        {cards.map((card, i) => (
          <Card
            id={card._id}
            key={card._id}
            roomId={_id}
            word={card.word}
            flipTime={flipTime * (i + 1)}
            definition={card.definition}
            suggested={card.suggested}
            obvious={card.obvious}
          />
        ))}
      </div>
    </>
  );
}
