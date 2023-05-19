"use client";
import { addPlayer } from "@app/lib/players/addPlayer";
import { userService } from "@utils/UserService";
import React, { useEffect, useState } from "react";
import style from "./nicknameForm.module.scss";
import Modal from "@app/ui/modal/modal";

type Props = {
  roomId: string;
};

function NicknameForm({ roomId }: Props) {
  const [nick, setNick] = useState("");
  const [modalToggle, setModalToggle] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("user_nickname");
    if (!username) {
      setModalToggle(true);
    }
  }, []);

  const handleModalToggle = () => {
    setModalToggle((prev) => !prev);
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { nickname } = await addPlayer(roomId, nick);
      userService.addUserNickname(nickname);
      setNick("");
      setModalToggle(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={modalToggle} modalClosed={handleModalToggle}>
      <form onSubmit={onFormSubmit}>
        <input
          className={style.form__input}
          value={nick}
          onChange={(event) => setNick(event.currentTarget.value)}
          placeholder="Your nickname"
        />
        <button className={style.form__btn}>Go</button>
      </form>
    </Modal>
  );
}

export default NicknameForm;
