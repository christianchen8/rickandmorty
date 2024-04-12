import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Episodes } from "../Episodes";

describe("Episodes", () => {
  // it("should render correctly", () => {
  //   const { container } = render(<Episodes position="" />);
  //   expect(container).toMatchSnapshot();
  // });

  it("should renders a heading", () => {
    render(<Episodes position="" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
