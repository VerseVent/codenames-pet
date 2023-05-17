import { ICard } from "./../../../tds/ICards";
class CardService {
  setSuggested(cards: ICard[], cardId: string): ICard[] {
    return cards.map((card) => {
      if (card.id === cardId) {
        card.obvious = false;
        card.suggested = !card.suggested;
        return card;
      }
      return card;
    });
  }
  setObvious(cards: ICard[], cardId: string): ICard[] {
    return cards.map((card) => {
      if (card.id === cardId) {
        card.suggested = false;
        card.obvious = !card.obvious;
        return card;
      }
      return card;
    });
  }
}
export const cardService = new CardService();
