import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import { formatDate, decodeHTMLEntities } from '../client'
import CloseIcon from './icons/CloseIcon'
const Card = (props) => { 
    
    const [movie, setMovie] = useState({ img: '', title: '', rating:'',  year: '', imdb_id: ''})

    useEffect(() => {
        const decodedTitle = decodeHTMLEntities(props.title);
        setMovie({ img: props.img, title: decodedTitle, rating: props.rating, year: props.year, imdb_id: props.imdb_id});
    }, [props]);


    return (
        <article className="card">
            <>
                <CloseIcon
                    attributes={{
                    onClick: () => {
                        window.location.href = `/edit/${movie.imdb_id}`;
                    },
                }} />
            </>
            <img 
                src={movie.img !== undefined ? movie.img : '/LargeLogo.png'} 
                alt={movie.title} 
                style={{

                }}
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src="/LargeLogo.png"
                }}
                loading='lazy'
            />
            <div className='info'>
                <h3>{movie.title}</h3>
                <div className='card-text'>
                    <p>{'⭐' + movie.rating}</p>
                    <p>{formatDate(movie.year)}</p>
                </div>
                <Link to={'/id/' + movie.imdb_id}>Read More →</Link>
                <Link to={`https://imdb.com `}>
                
                </Link>
            </div>
        </article>
    )
}

export default Card