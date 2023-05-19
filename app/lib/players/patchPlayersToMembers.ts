import { ICard } from "@tds/ICards";
import { IPlayer } from "@tds/IPlayer";

export async function patchPlayersToMembers(
  nickname: string,
  roomId: string
): Promise<IRoomResponse> {
  const updatedPlayersData = await fetch(
    `http://${process.env.NEXT_PUBLIC_SERVER_URL}:3000/api/room/${roomId}/playersToMembers`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname }),
    }
  );
  return updatedPlayersData.json();
}

type IRoomResponse = {
  room: {
    _id: string;
    title: string;
    cards: ICard[];
    players: IPlayer[];
    members: IPlayer[];
    masters: IPlayer[];
  };
};
