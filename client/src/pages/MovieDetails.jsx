import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL, formatDate } from '../client';
import './MovieDetails.scss';

const MovieDetails = () => {
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
            <main id="movie-content" className="movie-info">
                <picture className="image-container ">
                    <img id="image" src={movie.poster} alt={movie.title} />
                </picture>
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
            </main>
        </div>
    );
}

export default MovieDetails;