const renderMovies = async () => {
  const response = await fetch('/api/movies');
  const data = await response.json();
  
  const mainContent = document.querySelector('main');

  if (data) {

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