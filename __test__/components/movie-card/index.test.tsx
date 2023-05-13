import MovieCard from "@/components/movie-card";
import MovieSection from "@/components/movie-section";
import { render, screen } from "@testing-library/react";
import topRatedMovieMock from "../../../mock/movie/topRatedMovie.json";

describe("Movie Card", () => {
  const movie = {
    adult: false,
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    genre_ids: [18, 80],
    id: 238,
    original_language: "en",
    original_title: "The Godfather",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    popularity: 115.513,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-14",
    title: "The Godfather",
    video: false,
    vote_average: 8.7,
    vote_count: 17828,
  };
  const tv = {
    backdrop_path: "/mAJ84W6I8I272Da87qplS2Dp9ST.jpg",
    first_air_date: "2023-01-23",
    genre_ids: [9648, 18],
    id: 202250,
    name: "Dirty Linen",
    origin_country: ["PH"],
    original_language: "tl",
    original_name: "Dirty Linen",
    overview:
      "To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.",
    popularity: 2693.918,
    poster_path: "/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg",
    vote_average: 4.9,
    vote_count: 14,
  };
  it("should render the movie card", () => {
    render(<MovieCard movie={movie} />);

    const movieCardData = screen.getByAltText(movie.title);

    expect(movieCardData).toBeInTheDocument();
  });

  it("should render the tv card", () => {
    render(<MovieCard tv={tv} />);
    const tvCardData = screen.getByAltText(tv.name);

    expect(tvCardData).toBeInTheDocument();
  });
});
