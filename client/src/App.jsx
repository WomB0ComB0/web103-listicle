import '../public/styles/sass/styles.scss';
import Nav from '../public/components/semantics/nav';
import Header from '../public/components/semantics/header';
import Footer from '../public/components/semantics/footer';
import ErrorPage from './pages/ErrorPage';
import TopMovies from './pages/TopMovies';
import Loading from '../public/components/dom-states/loading';
import topMovies from '../../server/data/data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@picocss/pico';
import React, { Fragment, useState, useEffect } from 'react';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      const titleElement = document.querySelector('head title');
      titleElement.textContent = 'loading....';
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <Fragment>
      <Router>
        <Layout>
          <Routes>
              (<Fragment>
                <Route path="/" element={isLoading ? <Loading/> :(<TopMovies data={topMovies} />)} />
                {/* Test this out */}
                <Route path="/:title/:imdb_id" element={isLoading ? (<Loading/>) : (<Movie data={topMovies}/>)} />
                <Route path="*" element={isLoading ? <Loading/> :(<ErrorPage />)} /> 
              </Fragment>)
          </Routes>
        </Layout>
      </Router>
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

PropTypes.Layout = {
  children: PropTypes.node.isRequired,
}