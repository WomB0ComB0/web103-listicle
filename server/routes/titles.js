import express from 'express';
import titlesController from '../controllers/titles.js';

const router = express.Router();

router.get('/', titlesController.getTitles);

router.get('/:imdb_id', titlesController.getTitlesById);

export default router;
