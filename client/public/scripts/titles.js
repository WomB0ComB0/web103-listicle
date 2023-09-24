const renderMovies = async () => {
  const response = await fetch('/titles');
  const data = await response.json();
  
  // This needs to be changed to the correct element
  const mainContent = document.querySelector('main-content');

  if (data) {
    data.map((movie) => {
      const card = document.createElement('article');
      card.classList.add('card');

      const 
    })
  } else {

  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderMovies()
}