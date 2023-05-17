import { ICard } from "@tds/ICards";

export async function getRoomById(roomId: string): Promise<IRoomResponse> {
  const roomData = await fetch(`http://localhost:3000/api/room/${roomId}`, {
    cache: "no-cache",
  });
  return roomData.json();
}

type IRoomResponse = {
  room: {
    _id: string;
    title: string;
    cards: ICard[];
  };
};
