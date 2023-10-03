import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Form = () => {
  return (
    <form>
      <div className='grid'>
        <input type="search" id="search-bar" placeholder="Search for a movie" />
        <input type="submit" id="search-btn" value="Search" />
      </div>
      <div>
        <label htmlFor="sort-movies">
          Sort By:
        </label>
        <div className={``}>
          <select name="sort-movies" id="sort-movies">
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>
          <button>
            Sort
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="filter-movies">
          Filter By:
        </label>
        <div className={``}>
          <select name="filter-movies" id="filter-movies">
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>
          <menu>
            <li>
              <button>
                Filter
              </button>
            </li>
            <li>
              <button>
                Reset
              </button>
            </li>
          </menu>
        </div>
      </div>
      <div className={`grid`}>
        <menu>
          <li>
            <button>
              placeholder
            </button>
          </li>
          <li>
            <button>
              placeholder
            </button>
          </li>
          <li>
            <button>
              placeholder
            </button>
          </li>
          <li>
            <button>
              placeholder
            </button>
          </li>
        </menu>
      </div>
    </form>
  )
}

export default Form
