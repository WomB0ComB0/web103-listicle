import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Nav from '../semantics/Nav';
import Footer from '../semantics/Footer';
import { ThemeProvider } from '../../providers/ThemeProvider';
import AuthWrapper from '../../config/AuthWrapper';
import Loading from '../dom-states/Loading';
import usePageLoading from '../../hooks/useLoading';
const Layout = ({ children }) =>  {
  const isLoading = usePageLoading();
  return (
    <Fragment>
      {isLoading ? <Loading /> :
      <AuthWrapper>
            <ThemeProvider>
              <Nav />
              <main className="card-container">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
      </AuthWrapper>
      }
    </Fragment>
  )
}
Layout.protoTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout;
