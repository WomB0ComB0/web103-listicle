import axios from 'axios';
import { load } from 'cheerio';
import fs from 'fs';

const url = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm';
const filePath = './data/data.js';

export const getTopMovies = async () => {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        });
        const html = response.data;
        const $ = load(html);

        const movies = [];
        const punctuationPattern = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        // .ipc-lockup-overlay [poster] ✅
        // .gSfeXY [ranking]  ✅
        // .ipc-title__text [title] ✅
        // .faLXbD [year ✅, hours ✅ , rating classification ✅]
        // .ipc-rating-star--imdb [rating] ✅

        // This needs more specificity
        $('ul.ipc-metadata-list--base').each((i, elem) => {
            const poster = $(elem).find('a.ipc-lockup-overlay').attr('href');
            const ranking = $(elem).find('.gSfeXY').text().replace(/\(\d+\)/g, '').trim();
            const title = $(elem).find('.ipc-title__text').text();
            const year = $(elem).find('.faLXbD').text();
            const rating = $(elem).find('.ipc-rating-star--imdb').text().replace(/(\d+)/g, '').trim();

            // Add the metadata object to the movie object
            const movie = {
                poster, ranking, title, rating, year
            };

            movies.push(movie);
        });

        const sortedMovies = movies
            .filter(movie => movie.ranking !== "")
            .sort((a, b) => parseInt(a.ranking) - parseInt(b.ranking));

        fs.writeFileSync(filePath, `const movieData = ${JSON.stringify(sortedMovies, null, 2)};\nexport default movieData;\n`, 'utf8');
    } catch (error) {
        console.error(error);
    }
};

setInterval(() => {
    getTopMovies().catch(error => console.error('Error getting top movies:', error));
}, 1000 * 60 * 60 * 72);
