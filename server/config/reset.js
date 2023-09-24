import { pool } from '../config/database.js';
import '../config/dotenv.js';
import topMovies from '../data/data.js';

const createMoviesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS topmovies;

    CREATE TABLE IF NOT EXISTS topmovies (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      img VARCHAR(255) NOT NULL,
      title_type VARCHAR(255) NOT NULL,
      netflix_id VARCHAR(255) NOT NULL,
      synopsis TEXT NOT NULL,
      rating VARCHAR(255) NOT NULL,
      year VARCHAR(255) NOT NULL,
      runtime VARCHAR(255) NOT NULL,
      imdb_id VARCHAR(255) NOT NULL,
      poster VARCHAR(255) NOT NULL,
      top250 INT NOT NULL,
      title_date DATE NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log('🎉 topMovies table created successfully');
  } catch (err) {
    console.error('⚠️ error creating topMovies table', err);
  }
};

const sendMoviesTable = async () => {
  await createMoviesTable();

  topMovies.forEach((movie) => {
    const insertQuery = {
      text: 'INSERT INTO topmovies (title, img, title_type, netflix_id, synopsis, rating, year, runtime, imdb_id, poster, top250, title_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
      values: [
        movie.title,
        movie.img,
        movie.title_type,
        movie.netflix_id,
        movie.synopsis,
        movie.rating,
        movie.year,
        movie.runtime,
        movie.imdb_id,
        movie.poster,
        movie.top250,
        movie.title_date,
      ],
    };

    try {
      pool.query(insertQuery, insertQuery.values, (err, res) => {
        if (err) {
          console.error(`⚠️ error inserting ${movie.title}`, err);
        } else {
          console.log(`✅ ${movie.title} added successfully`);
        }
      });
    } catch (err) {
      console.error('⚠️ error inserting gifts', err);
    }
  });
};

sendMoviesTable();
