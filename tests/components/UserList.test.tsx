import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList component", () => {
  it("should render no users when the user array is empty", () => {
    const users: User[] = [];
    render(<UserList users={users} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render list of users when the user array is passed", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Lorenzo",
        isAdmin: true,
      },
      {
        id: 2,
        name: "Ambra",
        isAdmin: false,
      },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
