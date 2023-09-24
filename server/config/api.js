import '../config/dotenv.js';

const API_KEY = process.env.RAPID_API_KEY;

export const options = {
  method: 'GET',
  url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
  params: {
    type: 'movie',
    top250: '250',
    order_by: 'top250',
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
  },
};