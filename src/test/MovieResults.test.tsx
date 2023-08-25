import { render } from "@testing-library/react";
import MovieResults from "../components/MovieResult";

describe("MovieResults Component", () => {
  it("should show loading message", () => {
    const { getByText } = render(<MovieResults movies={[]} loading={true} />);
    const loadingElement = getByText("Loading...");

    expect(loadingElement).toBeTruthy(); 
  });
});
