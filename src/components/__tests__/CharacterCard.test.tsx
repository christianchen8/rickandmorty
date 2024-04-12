import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterCard } from "../CharacterCard";
import { character } from "@/mocks/character";

describe("Character Card", () => {

  it("should render correctly", () => {
    const { container } = render(
      <CharacterCard character={character} setSelectedCharacter={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render Image correctly", () => {
    render(
      <CharacterCard character={character} setSelectedCharacter={() => {}} />
    );
    const image = screen.getByTestId("character-image");
    expect(image).toHaveAttribute("alt", "character-image");
  });

  test("should call closeRightSection callback", () => {
    const setSelectedCharacter = jest.fn();
    const { getByTestId } = render(
      <CharacterCard character={character} setSelectedCharacter={setSelectedCharacter} />
    );
    fireEvent.click(getByTestId("container-card"));
    expect(setSelectedCharacter).toHaveBeenCalled();
  });
});
