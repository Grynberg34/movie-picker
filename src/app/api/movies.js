import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Authorization': process.env.NEXT_PUBLIC_MOVIES_API_KEY
  }
});