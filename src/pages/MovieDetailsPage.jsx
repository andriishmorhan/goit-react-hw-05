import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"

export default function MovieDetailsPage() {

    const { movieId } = useParams();
    const [movies, setMovies] = useState({});
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    

    useEffect(() => {

        async function movieDetails() {
            setLoader(true);
            try {
                const getMovieInfo = await getMovieById(movieId)
                setMovies(getMovieInfo)
            } catch (error) {
                setError(true);
            } finally {
                setLoader(false);
            }
        }
        movieDetails();
    }, [movieId])

    return (
        <div>
            <b>Welcome to details about movies!</b>


            <ul>
                <li>
                    <NavLink>
                        Go back
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Casts
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Reviews
                    </NavLink>
                </li>
            </ul>

            <Outlet />

        </div>
    );
}