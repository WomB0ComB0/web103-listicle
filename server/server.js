import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))


app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Success</h1>');
})

app.get('/top-movies', (req, res) => {
  const data = require('./data/data.js');
  res.status(200).json(data);
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})