import React from "react";
import style from "./backdrop.module.scss";

type Props = {
  show: boolean;
  clicked: Function;
};

function Backdrop({ show, clicked }: Props) {
  return show ? (
    <div className={style.backdrop} onClick={() => clicked()}></div>
  ) : null;
}

export default Backdrop;
