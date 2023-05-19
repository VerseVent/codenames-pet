import { connectToDb } from "@utils/database";
import Room from "@models/room";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();

    const roomsTitles = await Room.find({}).select("title");
    return NextResponse.json({ roomsTitles });
  } catch (error) {
    return new Response(`Failed to fetch room: ${error}`, { status: 500 });
  }
};

export const POST = async () => {
  try {
    await connectToDb();
    Room.create([
      {
        title: "Rooxcvxc436",
        players: [],
        members: [],
        masters: [],
        cards: [
          {
            word: "txzcz12",
            suggested: false,
            obvious: false,
            definition:
              "Test definition from database to test server/client components",
          },
          {
            word: "tezxczxrd4",
            suggested: false,
            obvious: false,
            definition:
              "Test definition from database to test server/client components",
          },
          {
            word: "tecvxvrd5",
            suggested: false,
            obvious: false,
            definition:
              "Test definition from database to test server/client components",
          },
        ],
      },
    ]);
    return NextResponse.json({ message: "Room generated" });
  } catch (error) {
    return new Response("Failed to fetch room", { status: 500 });
  }
};
