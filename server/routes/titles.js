import express from 'express';
import titlesController from '../controllers/titles.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const titlesLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.use(titlesLimiter);

router.get('/', titlesController.getTitles);
router.get('/:imdb_id', titlesController.getTitlesById);
router.post('/', titlesController.createTitles)
router.delete('/:id', titlesController.deleteTitles)
router.patch('/:id', titlesController.updateTitles)

export default router;
