import React from "react";
import Backdrop from "../backdrop/backdrop";
import style from "./modal.module.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  show: boolean;
  modalClosed: Function;
};

const Modal = ({ children, show, modalClosed }: Props) => {
  return (
    <>
      <Backdrop show={show} clicked={() => modalClosed()} />
      <div
        className={style.modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
