import axios from 'axios';
import fs from 'fs/promises';
import '../config/dotenv.js';
import { options } from '../config/api.js';

const dataDirectory = './data';
const filePath = `${dataDirectory}/data.js`;

const getTopMovies = async () => {
    try {
        const response = await axios.request(options);
        const data = response.data.results;
        const json = JSON.stringify(data, null, 4);

        try {
            await fs.mkdir(dataDirectory);
        } catch (mkdirError) {
            if (mkdirError.code !== 'EEXIST') {
                throw mkdirError;
            }
        }

        await fs.writeFile(filePath, `const topMovies = ${json}\nexport default topMovies`, 'utf8');
        console.log('Top movies successfully written to data.js');
    } catch (error) {
        console.error('Error getting top movies:', error);
    }
};

const updateIntervalInMilliseconds = 1000 * 60 * 60;
setInterval(() => {
    getTopMovies();
}, updateIntervalInMilliseconds);

export default getTopMovies;
