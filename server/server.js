import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import data from './data/data.js';
import { getTopMovies } from './src/topMovies.js';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/api', router);
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json(data);
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    getTopMovies().catch(error => console.error('Error getting top movies:', error));
});