import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = 'a28acc33d500e63a4115ba70a5fa1622';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const getTrendingVideos = axios.get(BASE_URL + "/trending/all/day?api_key=" + api_key);
  const getMovieByGenreId=(id)=>{
    return axios.get(`${BASE_URL}/discover/movie?api_key=${api_key}&with_genres=${id}`);
  }
export default {
  getTrendingVideos,
  getMovieByGenreId
};
