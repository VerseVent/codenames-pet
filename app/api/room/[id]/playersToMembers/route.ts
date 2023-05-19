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

    const { nickname } = await request.json();
    console.log(nickname);
    const roomDoc = await Room.findById(params.id);

    roomDoc.players = roomDoc.players.filter(
      (player: IPlayer) => player.nickname !== nickname
    );
    if (
      !roomDoc.members.find((member: IPlayer) => member.nickname === nickname)
    ) {
      roomDoc.members.push({
        nickname,
      });

      roomDoc.save();
      return NextResponse.json({ room: roomDoc });
    }

    return new Response("There is already player with your name", {
      status: 401,
    });
  } catch (error) {
    return new Response("Failed to patch room", { status: 500 });
  }
};
