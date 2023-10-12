import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import { formatDate } from '../client'
import CloseIcon from './icons/CloseIcon'
const Card = (props) => { 
    
    const [movie, setMovie] = useState({img: '', title: '', rating:'',  year: '', imdb_id: ''})

    useEffect(() => {
        const decodedTitle = decodeHTMLEntities(props.title);
        setMovie({img: props.img, title: decodedTitle, rating: props.rating, year: props.year, imdb_id: props.imdb_id});
    }, [props]);

    const decodeHTMLEntities = (text) => {
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(`<!doctype html><body>${text}`, 'text/html').body.textContent;
        return decodedString;
    };

    return (
        <article className="card">
            <CloseIcon />
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
                    <p>{formatDate(movie.year)}</p>
                </div>
                <Link to={'/id/' + movie.imdb_id}>Read More →</Link>
            </div>
        </article>
    )
}

export default Card