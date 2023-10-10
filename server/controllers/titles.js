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

const createTitles = async (req, res) => {
  try {
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body // TK???????
    const results = await pool.query(`
      INSERT INTO gifts (name, pricepoint, audience, image, description, submittedby, submittedon)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [name, pricepoint, audience, image, description, submittedby, submittedon]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateTitles = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body // TK???????
    const results = await pool.query(`
      UPDATE gifts SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon= $7 WHERE id = $8`,
      [name, pricepoint, audience, image, description, submittedby, submittedon, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteTitles = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM gifts WHERE id = $1', [id])
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
