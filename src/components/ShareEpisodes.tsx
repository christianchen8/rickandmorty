"use client";

import { useShallow } from "zustand/react/shallow";
import { useCharacterStore } from "@/stores/characters";
import { SingleEpisode } from "./SingleEpisode";

export function ShareEpisodes() {
  const [selectedFirstCharacter, selectedSecondCharacter] = useCharacterStore(
    useShallow((state) => [
      state.selectedFirstCharacter,
      state.selectedSecondCharacter,
    ])
  );

  const sharedEpisodes = selectedFirstCharacter?.episode.filter(
    (episode: string) => selectedSecondCharacter?.episode.includes(episode)
  );

  const noSharedEpisodes =
    selectedFirstCharacter?.id &&
    selectedSecondCharacter?.id &&
    !sharedEpisodes?.length;

  return (
    <div className="w-full border-x  h-[40vh] ">
      <div className="border-b h-[6vh]">
        <h1 className="text-black font-semibold text-2xl px-4 py-2">
          Character #1 & #2 - Shared Episodes
        </h1>
      </div>

      <div className="h-[34vh] w-full px-4 py-2 overflow-y-scroll no-scrollbar">
        {sharedEpisodes?.map((episode) => {
          return <SingleEpisode key={episode} apiUrl={episode} />;
        })}

        {noSharedEpisodes && <h1>No matches</h1>}
      </div>
    </div>
  );
}
