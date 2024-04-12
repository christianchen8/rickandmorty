"use client";

import { useEffect } from "react";

import { useShallow } from "zustand/react/shallow";
import { useCharacterStore } from "@/stores/characters";

import { CharacterListing } from "@/components/CharactersListing";

export function MainList({ data }: { data: Character[] }) {


  const [characters,setCharacters, selectedFirstCharacter, selectedSecondCharacter, setSelectedFirstCharacter, setSelectedSecondCharacter] =
    useCharacterStore(
      useShallow((state) => [
        state.characters,
        state.setCharacters,
        state.selectedFirstCharacter,
        state.selectedSecondCharacter,
        state.setSelectedFirstCharacter,
        state.setSelectedSecondCharacter,
      ])
    );

    const firstListing = characters.slice(0, 6);
    const secondListing = characters.slice(7, 13);

  useEffect(() => {
    setCharacters(data);
  }, []);

  return (
    <div className="grid grid-cols-2 h-[60vh] relative w-full">
      <div className="absolute top-0 left-0 w-full flex justify-center items-center py-1">
        <div className="h-12 w-12 border rounded-full z-20 bg-black flex items-center justify-center text-3xl cursor-pointer hover:bg-blue-700">
          <p className="-mt-1 p-0"> + </p>
        </div>
      </div>
      <CharacterListing
        title="Character #1"
        characters={firstListing}
        setSelectedCharacter={setSelectedFirstCharacter}
      />
      <CharacterListing
        isLast
        title="Character #2"
        characters={secondListing}
        setSelectedCharacter={setSelectedSecondCharacter}
      />
    </div>
  );
}
