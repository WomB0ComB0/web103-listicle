
import React, { Fragment, useState, useEffect } from 'react';
import Nav from './components/semantics/Nav';
import Header from './components/semantics/Header';
import Footer from './components/semantics/Footer';
import PageNotFound from './pages/PageNotFound';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import { useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@picocss/pico';
import { URL } from './client';
import { ThemeProvider } from './providers/ThemeProvider';
import { usePageLoading } from './hooks/useLoading';
import Loading from './components/dom-states/Loading.jsx';
export default function App() {
  const [movies, setMovies ] = useState([]);
  const isLoading = usePageLoading();
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${URL}/titles`);
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, [])

  let element = useRoutes([
    { path: '/', element: <Movies data={movies} /> },
    { path: '/id/:imdb_id', element: <MovieDetails data={movies} /> },
    { path: '/*', element: <PageNotFound /> },
  ]);

  return (
    <Fragment>
      {/* <ThemeProvider> */}
        <Layout>
          {isLoading ? <Loading /> : {element}}
        </Layout>
      {/* </ThemeProvider> */}
    </Fragment>
  )
}

const Layout = ({ children }) =>  {
  return (
    <Fragment>
      <Nav />
      <Header />
      <main className="card-container">
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

Layout.protoTypes = {
  children: PropTypes.node.isRequired,
}
