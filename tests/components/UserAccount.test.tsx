import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount component", () => {
  it("it should render the name when passed a name prop", () => {
    const user: User = { id: 1, name: "Lorenzo", isAdmin: true };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("it should render the edit button when passed an administrator", () => {
    const user: User = { id: 1, name: "Lorenzo", isAdmin: true };
    render(<UserAccount user={user} />);
    const editButton = screen.getByRole("button");

    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/edit/i);
  });

  it("it should not render the edit button when passed a simple user", () => {
    const user: User = { id: 1, name: "Lorenzo", isAdmin: false };
    render(<UserAccount user={user} />);
    const editButton = screen.queryByRole("button");

    expect(editButton).not.toBeInTheDocument();
  });
});
