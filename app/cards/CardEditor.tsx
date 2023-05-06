import { Actions, ICard } from "../../tds/ICards";

class CardEditor {
  setCardSuggested(card: ICard) {
    card.suggested = !card.suggested;
  }
  setCardObvious(card: ICard) {
    card.obvious = !card.obvious;
  }
  findCardById(cards: Array<ICard>, cardId: number) {
    return cards.find((card) => card.id === cardId);
  }
  editCardState(cards: Array<ICard>, cardId: number, action: Actions) {
    const test = cards.map((card) => {
      if (card.id === cardId) {
        card[action] = !card[action];
      }
      return card;
    });
    console.log(test);
    return test;
  }
}

export const cardEditor = new CardEditor();
