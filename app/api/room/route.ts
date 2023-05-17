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
    const roomsTitles = Room.create([
      {
        title: "Room153436",
        cards: [
          // {
          //   word: "test12312",
          //   suggested: false,
          //   obvious: false,
          //   definition:
          //     "Test definition from database to test server/client components",
          // },
          {
            word: "sdvdssdvb",
            suggested: false,
            obvious: false,
            definition:
              "Test definition from database to test server/client components",
          },
          // {
          //   word: "testword3",
          //   suggested: false,
          //   obvious: false,
          //   definition:
          //     "Test definition from database to test server/client components",
          // },
          // {
          //   word: "testword4",
          //   suggested: false,
          //   obvious: false,
          //   definition:
          //     "Test definition from database to test server/client components",
          // },
          // {
          //   word: "testword5",
          //   suggested: false,
          //   obvious: false,
          //   definition:
          //     "Test definition from database to test server/client components",
          // },
        ],
      },
    ]);
    console.log(roomsTitles);
    return NextResponse.json({ message: "Room generated" });
  } catch (error) {
    return new Response("Failed to fetch room", { status: 500 });
  }
};
