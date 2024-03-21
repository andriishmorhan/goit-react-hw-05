import css from './MovieList.module.css'
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies, urlPath }) {

 const defaultImg =
    "https://gorod.dp.ua/pic/news/newsfoto/23/03/216143/1_600.jpg";
  const location = useLocation();

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                         <img
              className={css.img}
              src={
                movie.poster_path
                  ? `${urlPath}${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {movie.title}
            </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}