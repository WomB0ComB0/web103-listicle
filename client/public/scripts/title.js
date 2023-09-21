const renderMovie = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())
  
  const response = await fetch(`/api/movies/${requestedID}`)

  const data = await response.json()

  // 
}

renderMovie();
