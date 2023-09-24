import { pool } from '../config/database.js'

const getTitles = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM topmovies ORDER BY top250 ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export default {
  getTitles
}
