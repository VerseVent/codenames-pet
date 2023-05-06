export interface ICard {
  id: number;
  word: string;
  suggested: boolean;
  obvious: boolean;
  definition: string;
}

export enum Actions {
  suggested = "suggested",
  obvious = "obvious",
}
