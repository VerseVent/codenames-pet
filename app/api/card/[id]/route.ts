import { ICard } from "@/tds/ICards";
import { NextResponse } from "next/server";
import { connectToDb } from "@utils/database";
import Room from "@models/room";

type ReqParams = {
  params: { id: string };
};

type ReqBody = {
  action: "suggested" | "obvious";
  cardId: string;
};

export const PATCH = async (request: Request, { params }: ReqParams) => {
  try {
    const { action, cardId }: ReqBody = await request.json();

    await connectToDb();
    const roomDoc = await Room.findById(params.id);

    roomDoc.cards = roomDoc.cards.map((cardDoc: ICard) => {
      if (cardDoc.id === cardId) {
        if (action === "suggested") {
          cardDoc[action] = !cardDoc[action];
          cardDoc.obvious = false;
          return cardDoc;
        }
        cardDoc[action] = !cardDoc[action];
        cardDoc.suggested = false;
        return cardDoc;
      }
      return cardDoc;
    });
    await roomDoc.save();
    const changedCard: ICard = roomDoc.cards.find(
      (roomCard: ICard) => roomCard.id === cardId
    );
    return NextResponse.json(changedCard);
  } catch (error) {
    return new Response("Failed to fetch room", { status: 500 });
  }
};
