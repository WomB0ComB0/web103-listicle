
import React, { Fragment, useState, useEffect } from 'react';
import Nav from './components/semantics/Nav';
import Header from './components/semantics/Header';
import Footer from './components/semantics/Footer';
import PageNotFound from './pages/PageNotFound';
import TopMovies from './pages/TopMovies';
import Loading from './components/dom-states/Loading';
import { useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@picocss/pico';
import usePageLoading from './hooks/useLoading';
import { URL } from './client';
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
    { path: '/', element: <TopMovies data={movies} /> },
    { path: '/id/:imdb_id', element: <TopMovies data={movies} /> },
    { path: '/*', element: <PageNotFound /> },
  ]);

  return (
    <Fragment>
      <Layout>
        {isLoading ? <Loading /> : element}
      </Layout>
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
