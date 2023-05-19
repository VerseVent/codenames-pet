export interface ICardProps {
  id: string;
  roomId: string;
  changeCard: Function;
  word: string;
  suggested: boolean;
  obvious: boolean;
  definition: string;
  flipTime: number;
}
