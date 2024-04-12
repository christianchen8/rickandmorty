"use client";

import { useEffect, useState } from "react";

import { useShallow } from "zustand/react/shallow";
import { useCharacterStore } from "@/stores/characters";

import { CharacterListing } from "@/components/CharactersListing";

interface MainListTypes {
  data: {
    results: Character[];
    info: any;
  };
}

export function MainList({ data }: MainListTypes) {
  const [page, setPage] = useState(1);

  const [
    characters,
    setCharacters,
    setSelectedFirstCharacter,
    setSelectedSecondCharacter,
    info,
    setInfo,
  ] = useCharacterStore(
    useShallow((state) => [
      state.characters,
      state.setCharacters,
      state.setSelectedFirstCharacter,
      state.setSelectedSecondCharacter,
      state.info,
      state.setInfo,
    ])
  );

  function paginate(characters: any, currentPage: any, itemsPerPage: any) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageListing = characters.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    return currentPageListing;
  }

  const itemsPerPage = 6;
  const firstListing = paginate(characters, page, itemsPerPage);
  const secondListing = paginate(characters, page + 1, itemsPerPage);

  useEffect(() => {
    if (!characters.length) {
      setCharacters(data.results);
      setInfo(data.info);
    }
  }, [characters.length]);
  const handleMore = async (type: string) => {
    const res = await fetch(info.next);
    const data = await res.json();
    setPage((prev) => (type === "next" ? prev + 1 : prev - 1));
    setCharacters(characters.concat(data.results));
    setInfo(data.info);
  };

  return (
    <div className="grid grid-cols-2 h-[60vh] relative w-full ">
      <div className="absolute top-1 left-0 w-full flex justify-center items-center py-1">
        <div className="w-[30%] bg-gray-200 flex items-center justify-center py-2 rounded-xl">
          <button
            disabled={page === 1}
            className="h-7 w-20 border rounded-full z-20 mx-2 bg-black flex items-center justify-center  cursor-pointer hover:bg-blue-700"
            onClick={() => handleMore("prev")}
          >
            <p className=" p-0"> PREV </p>
          </button>
          <button
            className="h-7 w-20 border rounded-full z-20 mx-2 bg-black flex items-center justify-center  cursor-pointer hover:bg-blue-700"
            onClick={() => handleMore("next")}
          >
            <p className=" p-0"> NEXT </p>
          </button>
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
