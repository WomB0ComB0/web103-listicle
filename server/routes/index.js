import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
import movieData from './data/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(giftData)
})

router.get('/top-movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movieData.find(movie => movie.title === title);
  res.status(200).json(movie);
});

export default router;