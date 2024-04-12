import { create } from "zustand";

interface CharactersState {
  info: any;
  characters: Character[];
  selectedCharacters: Character[];
  selectedFirstCharacter: Character | null;
  selectedSecondCharacter: Character | null;
}

interface CharactersActions {
  setInfo: (info: any) => void;
  setCharacters: (characters: Character[]) => void;
  setSelectedCharacters: (selectedCharacters: Character[]) => void;
  setSelectedFirstCharacter: (selectedFirstCharacter: Character | null) => void;
  setSelectedSecondCharacter: (
    selectedSecondCharacter: Character | null
  ) => void;
}

const initialState: CharactersState = {
  info: null,
  characters: [],
  selectedCharacters: [],
  selectedFirstCharacter: null,
  selectedSecondCharacter: null,
};

export const useCharacterStore = create<CharactersState & CharactersActions>(
  (set) => ({
    ...initialState,
    setInfo: (info) => set({ info }),
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
