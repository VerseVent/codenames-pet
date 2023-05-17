import React from "react";
import { IRoom, IRoomTitle } from "@/tds/IRoom";
import Link from "next/link";

export default async function RoomsPage() {
  const roomTitlesRes = await fetch("http:/localhost:3000/api/room", {
    cache: "no-cache",
  });

  const { roomsTitles } = await roomTitlesRes.json();

  return (
    <div>
      {roomsTitles.map((title: IRoomTitle) => (
        <div key={title._id}>
          <Link href={`/rooms/${title._id}`}>Room: {title.title}</Link>
        </div>
      ))}
    </div>
  );
}
