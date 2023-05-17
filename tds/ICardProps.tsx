export interface ICardProps {
  id: string;
  roomId: string;
  handleCard: Function;
  word: string;
  isLoading: boolean;
  suggested: boolean;
  obvious: boolean;
  definition: string;
  flipTime: number;
}
