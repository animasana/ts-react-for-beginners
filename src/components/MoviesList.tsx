import type { MoviesListProps } from "../types/MovieListTypes";
import Movie from "./Movie";

function MovieList({movies}: MoviesListProps) {

    return (
        <>            
            {movies.map((movie) => 
                <Movie 
                    key={movie.imdb_code}
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            )}            
        </>
    );
}

export default MovieList;