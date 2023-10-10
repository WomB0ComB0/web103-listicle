import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { URL, formatDate } from '../client'
import './EditGift.scss'

const EditTitles = () => {

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
    const { imdb_id }  = useParams();

    useEffect(() => {
        const fetchTitlesById = async () => {
            const response = await fetch(`/titles/${imdb_id}`)
            const data = await response.json()
            setMovie(data)
        }

        fetchTitlesById()
    }, [imdb_id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setMovie((prev) => {
            return {
                ...prev,
                [name]:value,
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
            body: JSON.stringify(title),
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
        <div className='EditGift'>
            <form>
            <label>Name</label> <br />
                <input type='text' id='name' name='name' value={movie.name} onChange={handleChange} /><br />
                <br/>

                <label>Description</label><br />
                <textarea rows='5' cols='50' id='description' name='description' value={movie.description} onChange={handleChange} ></textarea>
                <br/>

                <label>Image URL</label><br />
                <input type='text' id='image' name='image' value={movie.image} onChange={handleChange} /><br />
                <br/>

                <label>Price Point</label><br />
                <input type='text' id='pricepoint' name='pricepoint' value={movie.pricepoint} onChange={handleChange} /><br />
                <br/>

                <label>Audience </label><br />
                <input type="text" id='audience' name='audience' value={movie.audience} onChange={handleChange}/><br />
                <br/>

                <label>Submitted By</label><br />
                <input type='text' id='submittedby' name='submittedby' value={movie.submittedby} onChange={handleChange} /><br />
                <br/>

                <input className='submitButton' type='submit' value='Submit' onClick={updateTitles} />
                <button className='deleteButton' onClick={deleteTitles}>Delete</button>
            </form>
        </div>
    )
}

export default EditTitles
