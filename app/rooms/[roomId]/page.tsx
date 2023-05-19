import { getRoomById } from "@app/lib/getRoomById";
import { Metadata } from "next";
import GameBoard from "../components/gameBoard/gameBoard";
import NicknameForm from "../components/nicknameForm/nicknameForm";
import RoleForm from "../components/roleForm/RoleForm";
import style from "./room.module.scss";

type Params = {
  params: {
    roomId: string;
  };
};

export const metadata: Metadata = {
  title: "Game Room",
  description:
    "This is a meta description. Welcome to codenames cards. Happy coding and have a nice day",
};

export const dynamic = "force-dynamic";

export default async function RoomPage({ params: { roomId } }: Params) {
  const room = await getRoomById(roomId);

  console.log(room);
  return (
    <>
      <h2>Room: {room?.title}</h2>
      <NicknameForm roomId={roomId} />
      <div className={style.room__container}>
        <RoleForm
          players={room.players}
          roomId={room._id}
          members={room.members}
          masters={room.masters}
        />
        <GameBoard cards={room.cards} roomId={room._id} />
        {/* <RoleForm /> */}
      </div>
    </>
  );
}
