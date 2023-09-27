import React, { Fragment } from 'react';
const ErrorPage = () => {
  return (
    <Fragment>
      <section className="f0f">
        <h1>404</h1>
        <p>Page not found.</p>
        <button onclick="window.location.href('/')">
          Go Home
        </button>
      </section>
    </Fragment>
  );
}
export default ErrorPage;
