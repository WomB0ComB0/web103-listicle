import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
// import topMovies from '../data/data.js';
import titlesController from '../controllers/titles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', titlesController.getTitles);

router.get('/:imdb_id', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

export default router;