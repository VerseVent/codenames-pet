import { Actions } from "./../../tds/ICards";
import { ICard } from "@tds/ICards";

export async function patchCardById(
  roomId: string,
  action: Actions,
  cardId: string
): Promise<ICard> {
  console.log(action, cardId, roomId);
  const changedCard = await fetch(
    `http://${process.env.NEXT_PUBLIC_SERVER_URL}:3000/api/card/${roomId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, cardId }),
    }
  );
  return changedCard.json();
}
