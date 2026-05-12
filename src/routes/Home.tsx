import axios from "axios";
import { useEffect, useState } from "react";
import type { MovieApiResponse, MovieProps } from "../types/MovieListTypes";
import MovieList from "../components/MoviesList";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const getMovies = async () => {        
        try {
            const res = await axios.get<MovieApiResponse>(import.meta.env.VITE_API_URL + "/list_movies.json?minimum_rating=9.0&sort_by=year");

            const json = res.data;

            if (json.status === "ok") {
                setMovies(json.data.movies);
            }
        } catch (error) {
            console.error("데이터를 불러오는 중 에러 발생:", error);
        } finally {
            setLoading(false);
        }
    };    

    useEffect(() => {
        getMovies();        
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (                
                <MovieList movies={movies} />                
            )}            
        </div>
    );
}

export default Home;