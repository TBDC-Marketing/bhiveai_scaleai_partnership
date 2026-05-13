import { createFileRoute } from "@tanstack/react-router";
import StrategyDeck from "@/components/StrategyDeck";

export const Route = createFileRoute("/")({
  component: StrategyDeck,
  head: () => ({
    meta: [
      { title: "BNext AI × Scale AI — Strategy Deck" },
      {
        name: "description",
        content:
          "BNext AI and BHive strategic alignment deck for Scale AI: operational AI adoption, implementation, and measurable SME impact.",
      },
    ],
  }),
});
