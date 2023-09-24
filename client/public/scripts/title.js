const renderMovie = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())
  
  const response = await fetch(`/movies`)
  const data = await response.json()

  const movieContent = document.querySelector('title-content')
   
  let movie

  movie = data.find(movie => movie.id === requestedID)

  if (movie) {
    document?.getElementById('title').innerText = movie.title
    document?.getElementById('img').src = movie.img
    document?.getElementById('title_type').innerText = movie.title_type
    document?.getElementById('netflix_id').innerText = movie.netflix_id
    document?.getElementById('synopsis').innerText = movie.synopsis
    document?.getElementById('rating').innerText = movie.rating
    document?.getElementById('year').innerText = movie.year
    document?.getElementById('runtime').innerText = movie.runtime
    document?.getElementById('imdb_id').innerText = movie.imdb_id
    document?.getElementById('poster').innerText = movie.poster
    document?.getElementById('top250').innerText = movie.top250
    document?.getElementById('title_date').innerText = movie.title_date
  } else {
    const message = document.createElement('h2')
    message.textContent = 'Movie not found'
    movieContent.appendChild(message)
  }
}

renderMovie();
