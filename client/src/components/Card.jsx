import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import { formatDate } from '../client'
const Card = (props) => { 
    
    const [movie, setMovie] = useState({img: '', title: '', rating:'',  year: '', imdb_id: ''})

    useEffect(() => {
        setMovie({img: props.img, title: props.title, rating: props.rating, year: props.year, imdb_id: props.imdb_id});
    }, [props]);

    return (
        <article className="card">
            <img 
                src={movie.img !== undefined ? movie.img : '/LargeLogo.png'} 
                alt={movie.title} 
                style={{

                }}
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src="/LargeLogo.png"
                }}
            />
            <div className='info'>
                <h3>{movie.title}</h3>
                <div className='card-text'>
                    <p>{'⭐' + movie.rating}</p>
                    <p>{'Year: ' + formatDate(movie.year)}</p>
                </div>
                <Link to={'/id/' + movie.imdb_id}>Read More →</Link>
            </div>
        </article>
    )
}

export default Card