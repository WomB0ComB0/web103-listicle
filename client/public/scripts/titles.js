const renderMovies = async () => {
  const response = await fetch('/titles');
  const data = await response.json();
  
  // This needs to be changed to the correct element
  const mainContent = document.querySelector('main-content');

  if (data) {
    data.map((movie) => {
      const card = document.createElement('article');
      card.classList.add('card');

      const topContainer = document.createElement('div');
      topContainer.classList.add('top-container');

      const bottomContainer = document.createElement('div');
      bottomContainer.classList.add('bottom-container');

      topContainer.style.backgroundImage = `url(${movie.img})`;
      
      const title = document.createElement('h3');
      title.textContent = movie.title;
      bottomContainer.appendChild(title);

      const rating = document.createElement('p');
      rating.textContent = movie.rating;
      bottomContainer.appendChild(rating);

      const year = document.createElement('p');
      year.textContent = movie.year;
      bottomContainer.appendChild(year);

      const link = document.createElement('a');
      link.textContent = 'Read More >';
      link.setAttribute('href', `/titles/${movie.imdb_id}`);
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    })
  } else {
    const message = document.createElement('h2')
    message.textContent = 'No titles Available 😞'
    mainContent.appendChild(message)
  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../../src/page/error/404.html'
}
else {
  renderMovies()
}