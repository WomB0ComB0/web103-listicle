import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
const ErrorPage = () => {
  return (
    <>
      <section className="f0f">
        <h1>404</h1>
        <p>Page not found.</p>
        <button onclick={() => { Return('/'); }}>
          Go Home
        </button>
      </section>
    </>
  );
};

// Maybe a debounce
export const Return = ({ route }) => {
  e.preventDefault();
  window.location.href(`${route}`)
}

PropTypes.Return = {
  route: PropTypes.string.isRequired,
}

export default ErrorPage;