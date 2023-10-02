import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.scss'

const PageNotFound = () => { 
    return (
        <div className="PageNotFound">
            <main class="fof-container">
                <div class="fof">
                    <h1>Error 404</h1>
                    <p>
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <button to="/">
                        ⭐Return Home⭐
                    </button>
                </div>
            </main>
        </div>
    )
}

export default PageNotFound