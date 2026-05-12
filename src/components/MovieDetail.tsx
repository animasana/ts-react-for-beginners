import { Link } from "react-router";
import type { MovieDetailProps } from "../types/MovieDetailTypes";
import styles from "./MovieDetail.module.css";

function MovieDetail({year, medium_cover_image, title, description_intro, genres, yt_trailer_code}: MovieDetailProps) {
    return (
        <>
            <div className={styles.movie}>
                <img 
                    src={medium_cover_image} 
                    alt={title} 
                    className={styles.movie__img}
                />                
                <div>
                    <h2 className={styles.movie__title}>{title}</h2>
                    <h3 className={styles.movie__year}>{year}</h3>                    
                    <p>{description_intro}</p>
                    <ul className={styles.movie__genres}>
                        {genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                    {yt_trailer_code ? (
                        <iframe
                            width="320"
                            height="180"
                            src={`https://www.youtube.com/embed/${yt_trailer_code}`}
                            title={title}
                            allowFullScreen
                        />
                    ) : (
                        <div className={styles.movie__iframe}>
                            Not Available
                        </div>
                    )}                
                </div>
                <Link to="/">&larr;Back</Link>                    
            </div>                        
            
        </>        
    );
}

export default MovieDetail;