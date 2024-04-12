import { create } from "zustand";

interface CharactersState {
  characters: Character[];
  selectedCharacters: Character[];
  selectedFirstCharacter: Character | null;
  selectedSecondCharacter: Character | null;
}

interface CharactersActions {
  setCharacters: (characters: Character[]) => void;
  setSelectedCharacters: (selectedCharacters: Character[]) => void;
  setSelectedFirstCharacter: (selectedFirstCharacter: Character) => void;
  setSelectedSecondCharacter: (selectedSecondCharacter: Character) => void;
}

const initialState: CharactersState = {
  characters: [],
  selectedCharacters: [],
  selectedFirstCharacter: null,
  selectedSecondCharacter: null,
};

export const useCharacterStore = create<CharactersState & CharactersActions>(
  (set) => ({
    ...initialState,
    setCharacters: (characters) => set({ characters }),
    setSelectedCharacters: (selectedCharacters) => set({ selectedCharacters }),
    setSelectedFirstCharacter: (selectedFirstCharacter) =>
      set({ selectedFirstCharacter }),
    setSelectedSecondCharacter: (selectedSecondCharacter) =>
      set({ selectedSecondCharacter }),
    resetCharacters: () =>
      set({
        selectedCharacters: [],
        selectedFirstCharacter: null,
        selectedSecondCharacter: null,
      }),
  })
);
