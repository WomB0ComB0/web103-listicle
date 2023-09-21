import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import topMovies from './data/data.js';
import getTopMovies from './src/topMovies.js';
import router from './routes/index.js';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/api', router);
app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json(data);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    getTopMovies().catch(error => console.error('Error getting top movies:', error));
});