import { ICard } from "@tds/ICards";
import { IPlayer } from "@tds/IPlayer";

export async function getRoomById(roomId: string): Promise<IRoomResponse> {
  const roomData = await fetch(
    `http://${process.env.NEXT_PUBLIC_SERVER_URL}:3000/api/room/${roomId}`,
    {
      cache: "no-cache",
    }
  );
  return roomData.json();
}

export type IRoomResponse = {
  _id: string;
  title: string;
  cards: ICard[];
  players: IPlayer[];
  members: IPlayer[];
  masters: IPlayer[];
};
