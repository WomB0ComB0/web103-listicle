import express from 'express';
import './config/dotenv.js'
import cors from 'cors';
import titleRouter from './routes/titles.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/titles', titleRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Topins Toop</h1>')
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});