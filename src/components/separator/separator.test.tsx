import { render } from "@testing-library/react";
import Separator from ".";
import "@testing-library/jest-dom";

describe("Separator", () => {
  it("should render", () => {
    const { getByLabelText, debug } = render(<Separator />);
    expect(getByLabelText("separator")).toBeInTheDocument();
  });
});
