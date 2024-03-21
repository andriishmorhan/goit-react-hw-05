import { useEffect, useState } from "react"
import { trendingMovie } from "../rest-api"
import MovieList from "../components/MovieList/MovieList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [urlPath, setUrlPath] = useState("");

    useEffect(() => {
        async function onTrend() {
            try {
                const trendList = await trendingMovie();
                setMovies(trendList);
            } catch (error) {
                setError(true);
            }
        } onTrend();
    }, []);


    return (
        <div>
            <h2>Trending today</h2>
            <MovieList movies={movies} urlPath={urlPath} />
            {error && <ErrorMessage />}
        </div>
    )
}

