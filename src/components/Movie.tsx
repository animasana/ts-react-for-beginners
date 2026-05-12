import { Link } from "react-router";
import type { MovieProps } from "../types/MovieListTypes";
import styles from "./Movie.module.css";

function Movie({id, year, medium_cover_image, title, summary, genres}: MovieProps) {
    return (        
        <div className={styles.movie}>
            <img 
                src={medium_cover_image} 
                alt={title}
                className={styles.movie__img}
            />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 256 ? `${summary.slice(0, 256)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>               
            </div>            
        </div>                            
    );
}

export default Movie;