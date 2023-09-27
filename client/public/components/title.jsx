import { Fragment } from 'react';
import { Nav } from './nav';
import '../scripts/title';
const Title = () => {
  return (
    <Fragment>
      <Nav />
      <main className="title-content">
        <h1 id="title"></h1>
        <img id="img" src="" alt="title image">
        <h2 id="title_type"></h2>
        <h2 id="netflix_id"></h2>
        <h2 id="synopsis"></h2>
        <h2 id="rating"></h2>
        <h2 id="year"></h2>
        <h2 id="runtime"></h2>
        <h2 id="imdb_id"></h2>
        <h2 id="poster"></h2>
        <h2 id="top250"></h2>
        <h2 id="title_date"></h2>
      </main>
    </Fragment>
  );
};

export default Title;