import { render } from "@testing-library/react";
import { Loader } from "./loader";
import "@testing-library/jest-dom";

describe("Loader", () => {
  it("Should render when isLoading is true", () => {
    const { getByLabelText } = render(<Loader isLoading={true} />);
    expect(getByLabelText("loading")).toBeDefined();
  });
  it("Should not render when isLoading is false", () => {
    const { queryByLabelText } = render(<Loader isLoading={false} />);
    expect(queryByLabelText("loading")).not.toBeInTheDocument();
  });
});
