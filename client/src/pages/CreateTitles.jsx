import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL, formatDate } from '../client';
import './CreateTitles.scss';

const CreateTitles = () => {
    const [movie, setMovie] = useState({
        imdb_id: "",
        title: "",
        synopsis: "",
        rating: "",
        year: "",
        poster: "",
        img: "",
        title_date: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const createTitles = (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie),
        };
        fetch(`${URL}/titles`, options);
        window.location = '/';
    }

    return (
        <div className='CreateMovie'>
            <center>
                <h2
                    style={{
                        color: 'var(--primary)'
                    }}
                >
                    Add a Movie
                </h2>
            </center>
            <form>
                <label>Title</label> <br />
                <input type='text' id='title' name='title' value={movie.title} onChange={handleChange} /><br />
                <br/>

                <label>Synopsis</label><br />
                <textarea rows='5' cols='50' id='synopsis' name='synopsis' value={movie.synopsis} onChange={handleChange} required maxLength={255} placeholder={`Enter synopsis...`}></textarea>
                <p
                >
                    Characters remaining:
                     <span
                    style={{
                        color: 'var(--primary)'
                    }}

                     >
                    {255 - movie.synopsis.length}
                    </span>
                </p>
                <br/>

                <label>Poster URL</label><br />
                <input type='url' id='poster' name='poster' value={movie.poster} onChange={handleChange} /><br />
                <br/>

                <label>Rating</label><br />
                <input type='text' id='rating' name='rating' value={movie.rating} onChange={handleChange} /><br />
                <br/>

                <label>Year</label><br />
                <input type='text' id='year' name='year' value={movie.year} onChange={handleChange} /><br />
                <br/>

                <label>IMDb ID</label><br />
                <input type='text' id='imdb_id' name='imdb_id' value={movie.imdb_id} onChange={handleChange} /><br />
                <br/>

                <label>Additional Image URL</label><br />
                <input type='text' id='img' name='img' value={movie.img} onChange={handleChange} /><br />
                <br/>

                <label>Title Date</label><br />
                <input type='text' id='title_date' name='title_date' value={movie.title_date} onChange={handleChange} /><br />
                <br/>

                <input type='submit' value='Submit' onClick={createTitles} />
            </form>
        </div>
    )
}

export default CreateTitles;
