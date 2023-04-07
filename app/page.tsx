import HomeContainer from "@/containers/home";
import { fetchTopRatedMovies } from "@/service/movie";
import { Movie } from "@/types/movie";

export default async function Home() {
  const pagePromises = [fetchTopRatedMovies()];

  const [topRatedMovies] = await Promise.all(pagePromises);

  return (
    <div>
      <HomeContainer topRatedMovies={topRatedMovies} />
    </div>
  );
}
