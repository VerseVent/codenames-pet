"use client";
import { Metadata } from "next";
import { useRef, useState } from "react";
import Card from "../../components/cards/card";
import { Actions, ICard } from "../../tds/ICards";
import style from "./card.module.scss";
import { cardEditor } from "./CardEditor";

export const metadata: Metadata = {
  title: "Cards",
  description:
    "This is a meta description. Welcome to codenames cards. Happy coding and have a nice day",
};

export default function Cards() {
  const [cards, updateCards] = useState<Array<ICard>>([
    {
      id: 1,
      word: "TestCard1",
      suggested: false,
      obvious: false,
      definition:
        "TestDefinition1TestDefi nition1TestDe inition1TestDefinition1TestDefin ition1TestDefinition TestDefinition1TestDefinition1TestDefi nition1Test Definition1Te stDefinition1",
    },
    {
      id: 2,
      word: "TestCard2",
      suggested: false,
      obvious: false,
      definition:
        "TestDefinition1TestDefi nition1TestDe inition1TestDefinition1TestDefin ition1TestDefinition TestDefinition1TestDefinition1TestDefi nition1Test Definition1Te stDefinition1",
    },
    {
      id: 3,
      word: "TestCard3",
      suggested: false,
      obvious: false,
      definition:
        "TestDefinition1TestDefi nition1TestDe inition1TestDefinition1TestDefin ition1TestDefinition TestDefinition1TestDefinition1TestDefi nition1Test Definition1Te stDefinition1",
    },
    {
      id: 4,
      word: "TestCard4",
      suggested: false,
      obvious: false,
      definition:
        "TestDefinition1TestDefi nition1TestDe inition1TestDefinition1TestDefin ition1TestDefinition TestDefinition1TestDefinition1TestDefi nition1Test Definition1Te stDefinition1",
    },
    {
      id: 5,
      word: "TestCard5",
      suggested: false,
      obvious: false,
      definition:
        "TestDefinition1TestDefi nition1TestDe inition1TestDefinition1TestDefin ition1TestDefinition TestDefinition1TestDefinition1TestDefi nition1Test Definition1Te stDefinition1",
    },
  ]);
  const flipTime = useRef(250);

  const handleCardState = (cardId: number, action: Actions) => {
    updateCards((arr) => cardEditor.editCardMode(arr, cardId, action));
  };
  return (
    <>
      <div className={style.card__container}>
        {cards.map((e, i) => (
          <Card
            id={e.id}
            word={e.word}
            flipTime={flipTime.current * (i + 1)}
            definition={e.definition}
            key={e.id}
            suggested={e.suggested}
            obvious={e.obvious}
            handleCard={handleCardState}
          />
        ))}
      </div>
    </>
  );
}
