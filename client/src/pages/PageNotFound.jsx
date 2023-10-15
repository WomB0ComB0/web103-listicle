import React from 'react'
import './PageNotFound.scss'

const PageNotFound = () => {

    return (
        <section className="PageNotFound">
            <article className="fof">
                <h1>Error 404</h1>
                <p>
                    The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                </p>
                <a href={`/`} type='button'>
                    ⭐Return Home⭐
                </a>
            </article>
        </section>
    )
}
export default PageNotFound;