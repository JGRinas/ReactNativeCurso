import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e155f4dc71ff65ddb52e50190b164498',
    language: 'es-ES',
  },
});

export default movieDB;
