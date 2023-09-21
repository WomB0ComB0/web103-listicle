import express from 'express';
import axios from 'axios';
import {load} from 'cheerio';
import fs from 'fs';

const url = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm';
const filePath = './data/data.js';


const app = express();
const PORT = process.env.PORT || 3001;

const getTopMovies = async () => {
  try {
    const resposne = await axios.get(url);
    const html = resposne.data;
    const $ = load(html);

    const movies = [];
    // .ipc-lockup-overlay [poster] ✅
    // .gSfeXY [ranking]  ✅
    // .ipc-title__text [title] ✅
    // .faLXbD [year ✅, hours ✅ , rating classification ✅]
    // .ipc-rating-star--imdb [rating] ✅

    // This needs more specificity
    $('ul.ipc-metadata-list--base').each((i, elem) => {
      const poster = $(elem).find('.ipc-lockup-overlay').attr('href');
      const ranking = $(elem).find('.gSfeXY').text().replace('/', '');
      const title = $(elem).find('.ipc-title__text').text();
      const year = $(elem).find('.faLXbD').text().trim().split(' ')[0];
      const hours = $(elem).find('.faLXbD').text().split('|')[1];
      const classification = $(elem).find('.faLXbD').text().split('|')[2];
      const rating = $(elem).find('.ipc-rating-star--imdb').text();
      movies.push({
        poster,
        ranking,
        title,
        year,
        hours,
        classification,
        rating
      });
      return movies;
    });
    fs.writeFileSync(
      filePath, 
      `const movieData = [
        ${JSON.stringify(movies)}
      ];
      export default movieData;`, 
      'utf8'
    );
  } catch (error) {
    throw new error;
  }
};

setInterval(() => { getTopMovies(); }, 24 * 60 * 60 * 1000)

// Research (i've rarely used Express before)
app.get('/', (req, res) => {
  const data = require(filePath);
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});