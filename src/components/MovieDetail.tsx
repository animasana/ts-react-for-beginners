import { Link } from "react-router";
import type { MovieDetailProps } from "../types/MovieDetailTypes";

function MovieDetail({medium_cover_image, title, description_intro, genres}: MovieDetailProps) {
    return (
        <>
            <div>
                <h2>
                    {title}
                </h2>
                <p>{description_intro}</p>
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
            <Link to="/">&larr;Back</Link>
        </>        
    );
}

export default MovieDetail;