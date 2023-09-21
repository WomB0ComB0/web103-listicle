const renderMovies = async () => {
  const response = await fetch('/api/movies');
  const data = await response.json();
  
  
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderMovies()
}