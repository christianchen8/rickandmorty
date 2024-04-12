"use client";

import { useShallow } from "zustand/react/shallow";
import { useCharacterStore } from "@/stores/characters";
import { SingleEpisode } from "./SingleEpisode";

export function Episodes({ position }: { position: string }) {
  const [selectedFirstCharacter, selectedSecondCharacter] = useCharacterStore(
    useShallow((state) => [
      state.selectedFirstCharacter,
      state.selectedSecondCharacter,
    ])
  );

  const character =
    position === "first" ? selectedFirstCharacter : selectedSecondCharacter;

  return (
    <div className="w-full  h-[40vh] ">
      <div className="border-b h-[6vh]">
        <h1 className="text-black font-semibold text-2xl px-4 py-2">
          Character {position === "first" ? "#1" : "#2"} - Only Episodes
        </h1>
      </div>

      <div className="h-[34vh] w-full px-4 py-2 overflow-y-scroll no-scrollbar">
        {character?.episode.map((episode) => {
          return <SingleEpisode key={episode} apiUrl={episode} />;
        })}
      </div>
    </div>
  );
}
