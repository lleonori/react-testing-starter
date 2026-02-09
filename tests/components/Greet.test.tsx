import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet component", () => {
  it("it should render Hello with the name when passed a name prop", () => {
    render(<Greet name="Lorenzo" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello Lorenzo/i);
  });

  it("it should render Login button when not passed a name prop", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
