import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { URL, formatDate } from '../client'
import './EditTitles.scss'

const EditTitles = () => {
    useEffect(() => {
        document.querySelector('nav').classList.add('hidden')
    }, [])
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
    const { imdb_id } = useParams();

    useEffect(() => {
        const fetchTitlesById = async () => {
            try {
                const response = await fetch(`/titles/${imdb_id}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                const data = await response.json()
                if (data && data.length > 0) {
                    const movieData = data.find(movie => movie.imdb_id === imdb_id)
                    setMovie(movieData)
                }
            } catch (error) {
                console.error("Failed to fetch movie:", error)
            }
        }
        fetchTitlesById()
    }, [imdb_id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setMovie((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updateTitles = (event) => {
        event.preventDefault()

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            // Question here
            body: JSON.stringify(movie),
        }

        fetch(`${URL}/titles/${imdb_id}`, options)
        window.location = '/'
    }

    const deleteTitles = (event) => {
        event.preventDefault()

        const options = {
            method: 'DELETE'
        }

        fetch(`${URL}/titles/${imdb_id}`, options)
        window.location = '/'
    }

    return (
        <div className='EditMovie'>
            <form>
                <label>Title</label> <br />
                <input type='text' id='title' name='title' value={movie.title} onChange={handleChange} /><br />
                <br />

                <label>Synopsis</label><br />
                <textarea rows='5' cols='50' id='synopsis' name='synopsis' value={movie.synopsis} onChange={handleChange} maxLength={255}placeholder={`Enter synopsis...`}></textarea>
                <p>
                    Characters remaining: {255 - movie.synopsis.length}
                </p>
                <br />

                {/* Add filter, because the poster URL is form a netflix api */}
                <label>Poster URL</label><br />
                <input type='text' id='poster' name='poster' value={movie.poster} onChange={handleChange} /><br />
                <br />

                <label>Rating</label><br />
                <input type='text' id='rating' name='rating' value={movie.rating} onChange={handleChange} /><br />
                <br />

                {/* Add function for this as well, because of the way i've abstracted it  */}
                <label>Year</label><br />
                <input type="text" id='year' name='year' value={movie.year} onChange={handleChange} /><br />
                <br />

                {/* Add function for this as well */}
                <label>IMDb ID</label><br />
                <input type='text' id='imdb_id' name='imdb_id' value={movie.imdb_id} onChange={handleChange} /><br />
                <br />

                <input className='submitButton' type='submit' value='Submit' onClick={
                    updateTitles
                } />
                <button className='deleteButton' onClick={deleteTitles}>Delete</button>
            </form>
        </div>
    )
}

export default EditTitles
