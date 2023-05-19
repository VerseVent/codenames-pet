"use client";
import { patchPlayersToMembers } from "@app/lib/players/patchPlayersToMembers";
import { IPlayer } from "@tds/IPlayer";
import { userService } from "@utils/UserService";
import React, { useEffect, useState } from "react";
import style from "./roleForm.module.scss";

type Props = {
  players: IPlayer[];
  roomId: string;
  members: IPlayer[];
  masters: IPlayer[];
};

function RoleForm({ players, roomId, members, masters }: Props) {
  useEffect(() => {
    userService.validateUserStorage();
  }, []);

  const [initialPlayers, setInitialPlayers] = useState({
    players,
    members,
    masters,
  });

  const playersTeamsContent = (playersList: IPlayer[]) => {
    return playersList.map((player) => (
      <li className={style.roleForm__membersItem} key={player.nickname}>
        {player.nickname}
      </li>
    ));
  };

  const addMember = async () => {
    try {
      const username = localStorage.getItem("user_nickname");

      if (username) {
        const {
          room: { players, members, masters },
        } = await patchPlayersToMembers(username, roomId);
        setInitialPlayers(() => {
          return {
            players,
            members,
            masters,
          };
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={style.roleForm__container}>
      <h2 className={style.roleForm__membersTitle}>Members: </h2>
      <ul className={style.roleForm__members}>
        {playersTeamsContent(initialPlayers.members)}
      </ul>

      <button
        onClick={() => addMember()}
        className={style.roleForm__membersBtn}
      >
        Be a member
      </button>
      <h2 className={style.roleForm__masterTitle}>Master: </h2>
      <ul className={style.roleForm__masters}>
        {playersTeamsContent(initialPlayers.masters)}
      </ul>
      <button className={style.roleForm__masterBtn}>Be a master</button>
    </div>
  );
}

export default RoleForm;
