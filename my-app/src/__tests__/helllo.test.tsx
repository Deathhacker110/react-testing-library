import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

test("renders TExt in Greet", () => {
  render(<Greet />);

  expect(screen.getByText(/Hello Death/)).toBeInTheDocument();
});
