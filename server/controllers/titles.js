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
    const titleId = req.params.id
    const selectQuery = `SELECT title, img, synopsis, rating, year, poster, imdb_id, title_date FROM topmovies WHERE id = ${titleId}`
    const results = await pool.query(selectQuery, [titleId])

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(400).json({ error: error.message })
    console.log(error)
  }
}

export default {
  getTitles,
  getTitlesById
}
