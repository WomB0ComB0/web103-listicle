import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL, formatDate } from '../client';
import './MovieDetails.scss';

const MovieDetails = () => {
    const { imdb_id }  = useParams();
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
    

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                const response = await fetch(`${URL}/titles/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (data && data.length > 0) {
                    const movieData = data.find(movie => movie.imdb_id === imdb_id);
                    setMovie(movieData);
                }
            } catch (error) {
                console.error("Failed to fetch movie:", error);
            }
        }
        fetchMovieById();
    }, [imdb_id]);

    return (
        <div className="MovieDetails">
            <section id="movie-content" className="movie-info">
                <article className='image-card'>
                    <picture className="image-container ">
                        <img id="image" src={movie.poster} alt={movie.title} />
                    </picture>
                </article>
                <article className="movie-details">
                    <h2 id="title">{'Title: ' + movie.title}</h2>
                    <p id="synopsis">{'Description: ' + movie.synopsis}</p>
                    <p id="rating">{'Rating: ⭐' + movie.rating}</p>
                    <p id="year">{'Year: ' + movie.year}</p>
                    <p id="title_date">{'Release Date: ' + formatDate(movie.title_date)}</p>
                    <a href={`https://imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">
                        <button>
                            IMDB
                        </button>
                    </a>
                </article>
            </section>
        </div>
    );
}

export default MovieDetails;
