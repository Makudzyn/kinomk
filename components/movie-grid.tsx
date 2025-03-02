import { fetchMoviesByPopularity } from "@/lib/APIs/TMDB-movies";
import MovieCard from "@/components/movie-card";

export default async function MovieGrid() {
  const {results: movies} = await fetchMoviesByPopularity();
  return (
    <div className="grid px-5 mb-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          originalTitle={movie.original_title}
          originalLanguage={movie.original_language}
          overview={movie.overview}
          popularity={movie.popularity}
          releaseDate={movie.release_date}
          isAdult={movie.adult}
          rating={movie.vote_average}
          ratingCount={movie.vote_count}
          imageUrl={movie.poster_path}
        />
      ))}
    </div>
  )
}