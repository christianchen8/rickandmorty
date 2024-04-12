import Image from "next/image";
import { useShallow } from "zustand/react/shallow";
import { useCharacterStore } from "@/stores/characters";

interface CharacterCardTypes {
  character: Character;
  setSelectedCharacter: (character: Character | null) => void;
}

export function CharacterCard({
  character,
  setSelectedCharacter,
}: CharacterCardTypes) {
  const { status, name, species, image } = character;

  const [selectedFirstCharacter, selectedSecondCharacter] = useCharacterStore(
    useShallow((state) => [
      state.selectedFirstCharacter,
      state.selectedSecondCharacter,
    ])
  );

  const getColor = () => {
    if (status === "Dead") return "bg-red-500";
    if (status === "Alive") return "bg-green-500";
    return "bg-gray-500";
  };

  return (
    <div
      data-testid="container-card"
      className={`flex w-full border rounded-xl hover:shadow-lg cursor-pointer 
      ${selectedFirstCharacter === character ? "bg-blue-100" : ""}
      ${selectedSecondCharacter === character ? "bg-yellow-100" : ""}
      `}
      onClick={() => {
        selectedSecondCharacter === character ||
        selectedFirstCharacter === character
          ? setSelectedCharacter(null)
          : setSelectedCharacter(character);
      }}
    >
      <div className="h-full min-w-[40%] relative rounded-l-xl">
        <Image
          fill
          src={image}
          data-testid="character-image"
          alt="character-image"
          className="object-cover  rounded-l-xl"
        />
      </div>
      <div className="flex-col justify-center flex p-4 min-w-[60%] text-black ">
        <h1 className="leading-4 font-semibold">{name}</h1>

        <div className="mt-2 w-full flex items-center justify-start">
          <div
            className={`h-[16px] w-[16px] rounded-full mr-2 ${getColor()}`}
          ></div>
          <p>
            {status} - {species}
          </p>
        </div>
      </div>
    </div>
  );
}
