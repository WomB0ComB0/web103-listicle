import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
// import topMovies from './data/data.js';
import getTopMovies from './src/topMovies.js';
import titleRouter from './routes/titles.js';
import './config/dotenv.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/api', titleRouter);
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    getTopMovies().catch(error => console.error('Error getting top movies:', error));
});