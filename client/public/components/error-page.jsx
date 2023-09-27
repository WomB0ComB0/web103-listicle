import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
const ErrorPage = () => {
  return (
    <Fragment>
      <section className="f0f">
        <h1>404</h1>
        <p>Page not found.</p>
        <button onclick={() => { Return('/'); }}>
          Go Home
        </button>
      </section>
    </Fragment>
  );
}
export default ErrorPage;
// Maybe a debounce
const Return = ({ route }) => {
  e.preventDefault();
  window.location.href(`${route}`)
}

PropTypes.Return = {
  route: PropTypes.string.isRequired,
}