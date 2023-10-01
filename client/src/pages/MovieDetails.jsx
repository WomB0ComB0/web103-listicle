import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../client';
import './MovieDetails.css';
import { formatDate } from '../client';
const MovieDetails = () => {

    const [movie, setMovie] = useState({
        title: "",
        synopsis: "",
        rating: "",
        year: "",
        poster: "",
        imdb_id: "",
        title_date: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchMovieById = async () => {
            const response = await fetch(`${URL}/titles/${id}`);
            const data = await response.json();
            setMovie(data);
        }
        fetchMovieById();
    }, [id]);

    return (
        <div className="MovieDetails">
            <main id="movie-content" className="movie-info">
                <div className="image-container">
                    <img id="image" src={movie.poster} alt={movie.title} />
                </div>
                <div className="movie-details">
                    <h2 id="title">{movie.title}</h2>
                    <p id="synopsis">{movie.synopsis}</p>
                    <p id="rating">{'Rating: ' + movie.rating}</p>
                    <p id="year">{'Year: ' + movie.year}</p>
                    <p id="title_date">{'Release Date: ' + formatDate(movie.title_date)}</p>
                    <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">
                        <button className="imdb-btn">IMDB</button>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default MovieDetails;
