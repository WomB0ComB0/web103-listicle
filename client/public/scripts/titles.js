const renderMovies = async () => {
  const response = await fetch('http://localhost:3001/api/');
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