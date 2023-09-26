import topMovies from '../../../server/data/data.js'

export const Card = 
  topMovies.map(movie => {
    return `
      <article class="card">
        <div class="top-container" style="background-image: url(${movie.img})"></div>
        <div class="bottom-container">
          <h3>${movie.title}</h3>
          <p>${movie.rating}</p>
          <p>${movie.year}</p>
          <a href="/titles/${movie.imdb_id}">Read More ></a>
        </div>
      </article>
    `
  }).join('')
// `
//   <article class="card">

//   </article>
// `