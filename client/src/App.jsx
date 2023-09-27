import './public/styles/sass/styles.scss';
import { Nav, Header, Footer, Loading, ErrorPage } from '../public/components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@picocss/pico';
import { Fragment, useState, useEffect } from 'react';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <Fragment>
      <Router>
        <Layout>
          <Routes>
            {isLoading ? 
              (<Loading />):
              (<Fragment>
                <Route path="/" element={<TopMovies data={topMovies} />} />
                {/* Test this out */}
                <Route path="/:title/:imdb_id" element={<Movie data={topMovies}/>} />
                <Route path="*" element={<ErrorPage />} /> 
              </Fragment>)
            }
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