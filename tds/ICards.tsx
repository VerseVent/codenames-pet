export interface ICard {
  _id: string;
  id: string;
  word: string;
  suggested: boolean;
  obvious: boolean;
  definition: string;
}

export enum Actions {
  suggested = "suggested",
  obvious = "obvious",
}
