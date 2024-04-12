import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Episodes } from "../Episodes";

describe("Episodes", () => {
  it("renders a heading", () => {
    render(<Episodes />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });



  
});
