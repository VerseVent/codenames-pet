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
  editCardMode(cards: Array<ICard>, cardId: number, action: Actions) {
    return cards.map((card) => {
      if (card.id === cardId) {
        if (action === "suggested") {
          card.obvious = false;
          console.log(action);
          card[action] = !card[action];
          return card;
        }
        card.suggested = false;
        card[action] = !card[action];
      }
      return card;
    });
  }
}

export const cardEditor = new CardEditor();
