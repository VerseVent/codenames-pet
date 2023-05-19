import { IPlayer } from "./../../../../tds/IPlayer";
import { NextResponse } from "next/server";
import { connectToDb } from "@utils/database";
import Room from "@models/room";

type ReqParams = {
  params: { id: string };
};
export const GET = async (request: Request, { params }: ReqParams) => {
  try {
    await connectToDb();
    const { _id, title, players, members, masters, cards } =
      await Room.findById(params.id);

    return NextResponse.json({ _id, title, players, members, masters, cards });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch room", { status: 500 });
  }
};
