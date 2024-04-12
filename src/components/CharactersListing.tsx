import { CharacterCard } from "./CharacterCard";

interface CharacterListingTypes {
  title: string;
  isLast?: boolean;
  characters: Character[];
  setSelectedCharacter: (character: Character | null) => void;
}

export function CharacterListing({
  title,
  isLast,
  characters,
  setSelectedCharacter,
}: CharacterListingTypes) {
  return (
    <div
      className={`w-full flex flex-col h-[60vh] justify-between p-4 ${
        isLast ? "border-l border-black" : ""
      } `}
    >
      <h1
        className={`text-black text-2xl font-bold ${
          isLast ? "text-right" : "text-left"
        } `}
      >
        {title}
      </h1>

      <div className="h-[50vh]  grid grid-cols-2 grid-rows-3 gap-4 ">
        {characters.map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
              setSelectedCharacter={setSelectedCharacter}
            />
          );
        })}
      </div>
    </div>
  );
}
