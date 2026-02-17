import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText component", () => {
  const shortText = "Short text";
  const longText = "a".repeat(256);
  const truncatedText = longText.substring(0, 255) + "...";

  it("it should render text without abbr", () => {
    render(<ExpandableText text={shortText} />);

    const article = screen.getByRole("article");
    expect(article).toHaveTextContent(shortText);
  });

  it("it should render text with abbr", () => {
    render(<ExpandableText text={longText} />);

    const article = screen.getByRole("article");
    expect(article).toHaveTextContent(truncatedText);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });

  it("it should render text without abbr if click button Show More", async () => {
    render(<ExpandableText text={longText} />);

    const article = screen.getByRole("article");

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(article).not.toHaveTextContent(truncatedText);
    expect(button).toHaveTextContent(/less/i);
  });
});
