import type { MoviesListProps } from "../types/MovieListTypes";
import Movie from "./Movie";
import styles from "./MoviesList.module.css";

function MovieList({movies}: MoviesListProps) {
    return (
        <div className={styles.movies}>             
            {movies.map((movie) => 
                <Movie 
                    key={movie.imdb_code}
                    id={movie.id}
                    year={movie.year}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            )}            
        </div>
    );
}

export default MovieList;