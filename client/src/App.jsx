import React, { Fragment, useState, useEffect } from 'react';
import PageNotFound from './pages/PageNotFound';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import CreateTitles from './pages/CreateTitles';
import EditTitles from './pages/EditTitles';
import { useRoutes, Routes, Route } from 'react-router-dom';
import '@picocss/pico';
import { URL } from './client';
import AuthWrapper from './config/AuthWrapper'
import usePageLoading from './hooks/useLoading';
import Layout from './components/wrappers/Layout';
import Loading from './components/dom-states/Loading.jsx';
// import { SortingProvider } from './hooks/useSorting';

export default function App() {
  const [movies, setMovies] = useState([]);
  const isLoading = usePageLoading();
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${URL}/titles`);

      const data = await res.json();

      setMovies(data);
    }
    fetchMovies();
  }, [])

  return (
    <Fragment>
      {/* <SortingProvider> */}
        <Layout>
          <Routes>
            <Route path={`/`} element={<Movies data={movies} />} />
            <Route path={`/id/:imdb_id`} element={<MovieDetails data={movies} />} />
            <Route path={`/new`} element={<CreateTitles />} />
            <Route path={`/edit/:imdb_id`} element={<EditTitles data={movies} />} />
            <Route path={`/*`} element={<PageNotFound />} />
          </Routes>
        </Layout>
      {/* </SortingProvider> */}
    </Fragment>
  )
}
