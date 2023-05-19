import { NextResponse } from "next/server";
import Room from "@models/room";
import { connectToDb } from "@utils/database";

type ReqParams = {
  params: { id: string };
};

export const POST = async (request: Request, { params }: ReqParams) => {
  try {
    await connectToDb();

    const { nickname } = await request.json();
    const roomDoc = await Room.findById(params.id);
    console.log(roomDoc);
    roomDoc.players.push({
      nickname,
      // token,
    });

    roomDoc.save();

    return NextResponse.json({
      nickname,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add player", { status: 500 });
  }
};
