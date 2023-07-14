import GenresSection from "@/components/genres-section";
import { render, screen } from "@testing-library/react";
import movieGenreMock from "../../../mock/movie/movieGenres.json";
import HomeContainer from "@/containers/home";

describe("Genres", () => {
  it("should render genres section", () => {
    const { container } = render(<GenresSection genres={movieGenreMock} />);
    expect(container).toBeInTheDocument();
  });

  it("should genre name is correct", async () => {
    render(<GenresSection genres={movieGenreMock} />);

    const element = screen.getByText("Action");
    const mockData = movieGenreMock.find(
      (data) => data.name === element?.innerHTML
    )?.name;

    expect(element).toBeInTheDocument();
    expect(mockData).toEqual(element?.innerHTML);
  });
  it("should", () => {
    render(<HomeContainer categoryName={""} />);
  });
});
