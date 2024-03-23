import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../rest-api';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

import css from './MovieReviews.module.css'

export default function MovieReviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        if (!movieId) {
          return;
        }
        const getCastsData = async () => {
          try {
            const response = await getReviews(movieId);
    
            setReviews(response);
          } catch (error) {
            setError(true);
          } finally {
            setLoader(false);
          }
        };
        getCastsData();
      }, [movieId]);

    return (
        <div>
        {loader && <Loader />}
        <ul className={css.infoBox}>
          {reviews.length > 0 ? (
            reviews.map((review) => {
              return (
                <li key={review.id}>
                  <p className={css.author}>
                    Author:
                    <span className={css.authorName}>{review.author}</span>
                  </p>
                  <p>{review.content}</p>
                </li>
              );
            })
          ) : (
            <p>This movie has no reviews</p>
          )}
        </ul>
        {error && <ErrorMessage />}
      </div>
    )
}