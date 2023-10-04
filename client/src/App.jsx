import React, { Fragment, useState, useEffect } from 'react';
import { useRoutes, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import Layout from './components/wrappers/Layout';
import '@picocss/pico';
import { URL, supabase } from './client';
import AuthWrapper from './config/AuthWrapper';
import usePageLoading from './hooks/useLoading';
import Loading from './components/dom-states/Loading.jsx';
export default function App() {
  const [movies, setMovies ] = useState([]);
  const isLoading = usePageLoading();
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${URL}/titles`);
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      setMovies(data);
    }
    fetchMovies();
  }, [])  

  let element = useRoutes([
    { path: '/', element: <Movies data={movies} /> },
    { path: '/id/:imdb_id', element: <MovieDetails data={movies} /> },
    { path: '/*', element: <PageNotFound /> },
    // { path: '/dashboard', element: <Dashboard />}
  ]);

  return (
    <Fragment>
      <Loading />
        {/* <Layout> */}
          {/* <AuthWrapper> */}
          {/* <Routes> */}
            {/* <Route path={``} element={``}/>
                <Route path={``} element={``}/>
                <Route path={`/id/:imdb_id`} element={``}/>
                <Route path={`/*`} element={``}/>
            */}
          {/* </Routes> */}
            {/* {isLoading ? <Loading /> : element} */}
          {/* </AuthWrapper> */}
        {/* </Layout> */}
    </Fragment>
  )
}

