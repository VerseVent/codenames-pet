import { IPlayer } from "@/tds/IPlayer";
import { NextResponse } from "next/server";
import { connectToDb } from "@utils/database";
import Room from "@models/room";

type ReqParams = {
  params: { id: string };
};

export const PATCH = async (request: Request, { params }: ReqParams) => {
  try {
    await connectToDb();

    const { nickname, token } = await request.json();
    const roomDoc = await Room.findById(params.id);

    roomDoc.players = roomDoc.players.filter(
      (player: IPlayer) => player.nickname !== nickname
    );

    roomDoc.masters.push({
      player: {
        nickname,
        // token,
      },
    });

    roomDoc.save();

    return NextResponse.json({ room: roomDoc });
  } catch (error) {
    return new Response("Failed to patch room", { status: 500 });
  }
};
