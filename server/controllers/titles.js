import { pool } from '../config/database.js'

const getTitles = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM topmovies ORDER BY top250 ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getTitlesById = async (req, res) => {
  try {
    const titleId = req.params.id;
    const selectQuery = `SELECT title, img, synopsis, rating, year, poster, imdb_id, title_date FROM topmovies WHERE id = $1`;
    const results = await pool.query(selectQuery, [titleId]);

    if (results.rows.length === 0) {
      res.status(404).json({ error: 'Title not found' });
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.error(error);
  }
}

const createTitles = async (req, res) => {
  try {
    const { title, img, title_type, netflix_id, synopsis, rating, year, runtime, imdb_id, poster, top250, title_date, } = req.body
    const results = await pool.query(`
      INSERT INTO topmovies (title, img, title_type, netflix_id, synopsis, rating, year, runtime, imdb_id, poster, top250, title_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *`,
      [title, img, title_type, netflix_id, synopsis, rating, year, runtime, imdb_id, poster, top250, title_date,]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateTitles = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { title, img, title_type, netflix_id, synopsis, rating, year, runtime, imdb_id, poster, top250, title_date, } = req.body
    const results = await pool.query(`
      UPDATE topmovies SET title = $1, img = $2, title_type = $3, netflix_id = $4, synopsis = $5, rating = $6, year = $7, runtime = $8, imdb_id = $9, poster = $10, top250 = $11, title_date = $12 WHERE id = $13 `,
      [title, img, title_type, netflix_id, synopsis, rating, year, runtime, imdb_id, poster, top250, title_date, id]
        // id needs to be looked at closely, nevermind, it matches the json response from the api
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteTitles = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    // This needs to be checked, this is fine, checked the json response and the database
    const results = await pool.query('DELETE FROM topmovies WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getTitles,
  getTitlesById,
  createTitles,
  updateTitles,
  deleteTitles
}
