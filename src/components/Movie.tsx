import { Link } from "react-router";
import type { MovieProps } from "../types/MovieListTypes";

function Movie({id, medium_cover_image, title, summary, genres}: MovieProps) {
    return (        
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <img 
                src={medium_cover_image} 
                alt={title} 
            />
        </div>                            
    );
}

export default Movie;