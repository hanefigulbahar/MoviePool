import { render, screen, waitFor } from "@testing-library/react";

import FeaturedMovie from "@/components/featured-movie";
import topRatedMovie from "../../../mock/movie/topRatedMovie.json";

import { randomData } from "@/components/featured-movie";

describe("Featured Movie", () => {
  it("should render the movie name ", async () => {
    render(<FeaturedMovie type="movie" movieData={topRatedMovie} />);
    const dataName = screen.getByTestId("data-name").innerHTML;
    await waitFor(() => {
      expect(dataName).not.toHaveLength(0);
    });
  });
  it("should movie name equal to the movie title", async () => {
    render(<FeaturedMovie type="movie" movieData={topRatedMovie} />);

    const dataName = screen.getByTestId("data-name").innerHTML;
    const movieTitle = topRatedMovie.find(
      (data) => data.title === dataName
    )?.title;

    expect(movieTitle).toEqual(dataName);
  });
  it("should function correctly random data", () => {
    const random = randomData(topRatedMovie);
    const movie = topRatedMovie.find((data) => data.id === random.id);

    expect(movie).toEqual(random);
  });
});
