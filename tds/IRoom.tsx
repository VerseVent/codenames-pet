import { ICard } from "./ICards";

export interface IRoom {
  id: string;
  title: string;
  maxPlayers: number;
  password: string;
  playing: boolean;
  cards: Array<ICard>;
}

export interface IRoomTitle {
  _id: string;
  title: string;
}
