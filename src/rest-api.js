import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/11";
axios.defaults.headers.common["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjIwYzIwMjQxZDNhZDIwNDJmY2JlN2Y3N2RlMmJjOSIsInN1YiI6IjY1ZjZlODc3YWUzODQzMDE3ZDRhNDMxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtAKYpTzBMSaRZwT6CVFpZz_Fnw1ezIKFz56-KRkRo";
  
    export const trendingMovie = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
    };

    export const searchMovie = async (query, page) => {
  const response = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getImagePath = async () => {
  const response = await axios.get("/configuration");
  return response.data.images;
};

export const getCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};