import { useEffect, useState } from 'react';
import { trendingMovie, getImagePath } from '../rest-api';

import MovieList from '../components/MovieList/MovieList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [urlPath, setUrlPath] = useState("");

    useEffect(() => {
        async function onTrend() {
            try {
                const trendList = await trendingMovie();
                const imagePath = await getImagePath();
                const { base_url, backdrop_sizes } = imagePath;
                const imageUrl = `${base_url}${backdrop_sizes[1]}`;
                setMovies(trendList);
                setUrlPath(imageUrl);
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
    );
}

