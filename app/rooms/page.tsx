import React from "react";
import { IRoom, IRoomTitle } from "@/tds/IRoom";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function RoomsPage() {
  const roomTitlesRes = await fetch(
    `http:/${process.env.NEXT_PUBLIC_SERVER_URL}:3000/api/room`,
    {
      cache: "no-cache",
    }
  );

  const { roomsTitles } = await roomTitlesRes.json();

  return (
    <div>
      {roomsTitles.map((title: IRoomTitle) => (
        <div key={title._id}>
          <Link
            prefetch={false}
            href={`http://[::1]:3000/rooms/${title._id}`}
            replace
          >
            Room: {title.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
