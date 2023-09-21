import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
import movieData from '../data/data.json';

const __filename = fileURLToPath(import.meta.url);
path.dirname(__filename);
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(movieData)
})

router.get('/top-movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movieData.find(movie => movie.title === title);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }
  res.status(200).json(movie);
});

export default router;