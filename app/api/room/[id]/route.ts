import { NextResponse } from "next/server";
import { connectToDb } from "@utils/database";
import Room from "@models/room";

type ReqParams = {
  params: { id: string };
};

export const GET = async (request: Request, { params }: ReqParams) => {
  try {
    await connectToDb();
    const roomById = await Room.findById(params.id);

    return NextResponse.json({ room: roomById });
  } catch (error) {
    return new Response("Failed to fetch room", { status: 500 });
  }
};
