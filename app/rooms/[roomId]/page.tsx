import { ICard } from "@/tds/ICards";
import { getRoomById } from "@app/lib/getRoomById";
import { Metadata } from "next";
import GameBoard from "../components/gameBoard/gameBoard";

type Params = {
  params: {
    roomId: string;
  };
};

export const metadata: Metadata = {
  title: "Game Room",
  description:
    "This is a meta description. Welcome to codenames cards. Happy coding and have a nice day",
};

export default async function RoomPage({ params: { roomId } }: Params) {
  const {
    room: { _id, title, cards },
  } = await getRoomById(roomId);

  return (
    <>
      <h2>Room: {title}</h2>
      <GameBoard cards={cards} />
    </>
  );
}
