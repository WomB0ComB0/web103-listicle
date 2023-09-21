import axios from 'axios';
import fs from 'fs/promises'; // Use fs.promises for async file operations
import dotenv from 'dotenv';
dotenv.config();

const dataDirectory = './data';
const filePath = `${dataDirectory}/data.json`;
const API_KEY = process.env.RAPID_API_KEY;

const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
    params: {
        type: 'movie',
        top250: '250',
        order_by: 'date',
    },
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
    },
};

const getTopMovies = async () => {
    try {
        const response = await axios.request(options);
        const data = response.data.ITEMS;
        const json = JSON.stringify(data, null, 4);

        // Ensure the 'data' directory exists
        try {
            await fs.mkdir(dataDirectory);
        } catch (mkdirError) {
            if (mkdirError.code !== 'EEXIST') {
                throw mkdirError;
            }
        }

        await fs.writeFile(filePath, json, 'utf8');
        console.log('Top movies successfully written to data.json');
    } catch (error) {
        console.error('Error getting top movies:', error);
    }
};

const updateIntervalInMilliseconds = 1000 * 60 * 60;
setInterval(() => {
    getTopMovies();
}, updateIntervalInMilliseconds);

export default getTopMovies;
