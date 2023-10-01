import React, { useState, useEffect, Fragment } from 'react'
import './Movies.css'
import Card from '../components/Card'

const Movies = (props) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies(props.data)
    }, [props])
    
    return (
        <div className="Movies">
            <main>
            {
                movies && movies.length > 0 ?
                movies.map((movies,index) => 
                    <Fragment key={index}>
                        <Card 
                          imdb_id={movies.imdb_id}
                          img={movies.img} 
                          title={movies.title} 
                          rating={movies.rating} 
                          year={movies.year} />
                    </Fragment>
                ) : <h3 className="noResults">{'No Movies Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Movies