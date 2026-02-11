import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText component", () => {
  it("it should render text without abbr", () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum?";
    render(<ExpandableText text={text} />);

    const article = screen.getByRole("article");

    expect(article).toBeInTheDocument();
    expect(article.textContent.length).toBeLessThan(255);
    expect(article).toHaveTextContent(text);
  });

  it("it should render text with abbr", () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicing elit. Cumtetur adipisicing elit. Cumtetur adipisicing elit. Cumtetur adipisicing elit. Cumtetur adipisicing elit. Cum?";
    render(<ExpandableText text={text} />);

    const article = screen.getByRole("article");

    expect(article).toBeInTheDocument();
    expect(article.textContent.length).toBeGreaterThan(255);
    expect(article).toHaveTextContent("...");
  });

  it("it should render text without abbr if click button Show More", async () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicingadipisicing elit. Cumtetur adipisicing elit. Cumtetur adipisicing elit. Cumtetur adipisicing elit. Cumtetur adipisicing elit. Cum?";
    render(<ExpandableText text={text} />);

    const article = screen.getByRole("article");
    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);

    expect(article).not.toHaveTextContent("...");
  });
});
