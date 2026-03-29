import axios from "axios";
import type { MoviesResponse, FetchMoviesParams } from "../types/movie";

// твій токен
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'";

export const fetchMovies = async ({
  query,
  page = 1,
}: FetchMoviesParams): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: { query, page },
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return response.data;
};