import MovieSection from "@/components/movie-section";
import { render, screen } from "@testing-library/react";
import popularMovieMock from "../../../mock/movie/popularMovie.json";
import popularTvMock from "../../../mock/tv/popularTv.json";

describe("Movie Section", () => {
  it("should render movie section", () => {
    render(<MovieSection movie={popularMovieMock} title="Popular Movie" />);
    const movieDataSection = screen.getByText("Popular Movie");

    expect(movieDataSection.innerHTML).toBe("Popular Movie");
    expect(movieDataSection).toContainHTML(
      '<h3 class="title">Popular Movie</h3>'
    );
  });

  it("should render tv section", () => {
    render(<MovieSection tv={popularTvMock} title="Popular Tv Series" />);
    const movieDataSection = screen.getByText("Popular Tv Series");

    expect(movieDataSection.innerHTML).toBe("Popular Tv Series");
    expect(movieDataSection).toContainHTML(
      '<h3 class="title">Popular Tv Series</h3>'
    );
  });
});
