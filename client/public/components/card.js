import topMovies from '../../../server/data/data.js'

export const Card = 
  topMovies.map((movie, index) => {
    const modalId = `modal-${index}`
    return `
      <article class="card">
        <img src="${movie.img}" alt="${movie.title}" />
        <div class="bottom-container">
          <h3>${movie.title}</h3>
          <p>⭐${movie.rating}</p>
          <p>${movie.year}</p>
          <button data-target="modal" onClick="toggleModal(event)">Read More</button>
          </div>
      </article>
      <dialog id="${modalId}" closed>
        <article>
          <h3>${movie.title}</h3>
          <p>${movie.rating}</p>
          <p>${movie.year}</p>
          <p>${movie.synopsis}</p>
          <button data-close="${modalId}" target="${modalId}" onClick="toggleModal(event)">Close</button>
        </article>
      </dialog>
    `
  }).join('')

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modal.hasAttribute('closed')) {
      console.log('modal has closed attribute')
      modal.removeAttribute('closed');
      modal.setAttribute('open', 'open');
    } else {
      modal.setAttribute('closed', 'closed');
    }
  }
}