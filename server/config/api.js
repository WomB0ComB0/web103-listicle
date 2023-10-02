import '../config/dotenv.js';

const API_KEY = process.env.RAPID_API_KEY;
// const API_KEY_TWO = process.env.RAPID_API_KEY_TWO;

export const options = {
  method: 'GET',
  url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
  params: {
    type: 'movie',
    top250: '250',
    order_by: 'top250', 
    ascending: 'yes',
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
  },
};

// export const options_title = (id) => ({
//   method: 'GET',
//   url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
//   headers: {
//     'X-RapidAPI-Key': API_KEY_TWO,
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// });