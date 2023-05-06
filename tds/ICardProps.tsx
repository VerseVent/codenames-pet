export interface ICardProps {
  id: number;
  word: string;
  suggested: boolean;
  obvious: boolean;
  definition: string;
  handleCard: Function;
}
