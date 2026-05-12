import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MovieDetailProps, MovieDetailResponse } from "../types/MovieDetailTypes";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";


function Detail() {
    
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<MovieDetailProps>({} as MovieDetailProps);

    const getMovie = async () => {
        try {
            const response = await axios.get<MovieDetailResponse>(import.meta.env.VITE_API_URL + `/movie_details.json?movie_id=${id}`);

            const json = response.data;

            if (json.status === "ok") {
                setMovie(json.data.movie);
            }
        } catch (error) {
            console.log("영화 상세 정보를 가져오지 못했습니다.", error);            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovie();        
    }, []);
    
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (            
                <MovieDetail
                    year={movie.year}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    genres={movie.genres}
                    description_intro={movie.description_intro}
                    yt_trailer_code={movie.yt_trailer_code}
                />  
            )}
        </div>
    );
}

export default Detail;
