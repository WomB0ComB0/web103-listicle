import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL, formatDate } from '../client';
import './MovieDetails.scss';

const MovieDetails = (data) => {
    console.log(data);
    const [movie, setMovie] = useState({
        imdb_id: "",
        title: "",
        synopsis: "",
        rating: "",
        year: "",
        poster: "",
        title_date: ""
    });
    
    const { imdb_id }  = useParams();
    console.log(imdb_id);
    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                const response = await fetch(`${URL}/id/${imdb_id}`);
                console.log(response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setMovie(data);
            } catch (error) {
                console.error("Failed to fetch movie:", error);
            }
        }
        fetchMovieById();
    }, [data, imdb_id]);


    return (
        <div className="MovieDetails">
            <main id="movie-content" className="movie-info">
                <div className="image-container">
                    <img id="image" src={movie.poster} alt={movie.title} />
                </div>
                <div className="movie-details">
                    <h2 id="title">{'Title:' + movie.title}</h2>
                    <p id="synopsis">{'Description' + movie.synopsis}</p>
                    <p id="rating">{'Rating: ' + movie.rating}</p>
                    <p id="year">{'Year: ' + movie.year}</p>
                    <p id="title_date">{'Release Date: ' + formatDate(movie.title_date)}</p>
                    <a href={`https://imdb.com/title/` + `${movie.imdb_id}`} target="_blank" rel="noreferrer" onClick={() => console.log(movie.imdb_id)}>
                        <button >
                            IMDB
                        </button>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default MovieDetails;
