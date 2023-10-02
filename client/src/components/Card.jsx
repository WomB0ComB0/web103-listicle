import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { formatDate } from '../client'
const Card = (props) => { 
    
    const [movie, setMovie] = useState({img: '', title: '', rating:'',  year: '', imdb_id: ''})

    useEffect(() => {
        setMovie({img: props.img, title: props.title, rating: props.rating, year: props.year, imdb_id: props.imdb_id});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${movie.img})`}}></div>
            <div className='bottom-container'>
{/* formatDate */}
                <h3>{movie.title}</h3>
                <p>{'⭐' + movie.rating}</p>
                <p>{'Year: ' + formatDate(movie.year)}</p>
                <Link to={'/gift/' + movie.imdb_id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Card