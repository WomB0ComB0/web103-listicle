import React, { Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import topMovies from '../../../server/data/data.js'

Modal.setAppElement('#app');
export const Card = () => {
  return (
    <>
      {topMovies.map((movie, index) => {
        const modalId = `modal-${index}`;
        return (
        <Fragment key={index}>
          <article className="card">
            <img src="${movie.img}" alt="${movie.title}" />
            <div className="bottom-container">
              <h3>{movie.title}</h3>
              <p>⭐{movie.rating}</p>
              <p>{movie.year}</p>
              <button onClick={openModal}>More Info</button>
              </div>
          </article>
          <dialog className={{ModalStyles}}>
            <CardContent movie={topMovies} />
          </dialog>
        </Fragment>
      )})};
    </>
  )
}

const CardContent = ({ movie }) => {
  return (
    <Fragment>
      <article>
        
        <h1>{movie.title}</h1>
        <img src={movie.img.toString()} alt={movie.title} />
        <h2>{movie.title_type.toString()}</h2>
        <h2>{movie.netflix_id.toString()}</h2>
        <h2>{movie.synopsis.toString()}</h2>
        <h2>{movie.rating.toString()}</h2>
        <h2>{movie.year.toString()}</h2>
        <h2>{movie.runtime.toString()}</h2>
        <h2>{movie.imdb_id.toString()}</h2>
        <h2>{movie.poster.toString()}</h2>
        <h2>{+movie.top250}</h2>
        <h2>{movie.title_date}</h2>
      </article>
    </Fragment>
  );
};

CardContent.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50%',
    height: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  }
}
export default Card;