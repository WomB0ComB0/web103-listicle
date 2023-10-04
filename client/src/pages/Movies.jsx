import React, { useState, useEffect, Fragment } from 'react'
import './Movies.scss'
import Header from '../components/semantics/Header'
import Card from '../components/Card'
import Form from '../components/Form'

const Movies = (props) => {
    // console.log(props)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies(props.data)
        // console.log(props.data)
    }, [props])
    
    return (
        <>
            <Header />
            <Form />
            <section className='Movies grid' style={{display: 'flex', width: '100%', justifyContent: 'space-around', alignContent: 'center', marginInline: 'auto'}}>
            {
                movies && movies.length > 0 ?
                movies.map((movies,index) => 
                    <Fragment key={index}>
                        <Card 
                          imdb_id={movies.imdb_id}
                          img={movies.img} 
                          title={movies.title} 
                          rating={movies.rating} 
                          year={movies.year}
                        
                          />
                    </Fragment>
                ) : <h3 className="noResults">{'No Movies Yet 😞'}</h3>
            }
            </section>
        </>  
    )
}

export default Movies