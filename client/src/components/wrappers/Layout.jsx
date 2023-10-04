import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Nav from '../semantics/Nav';
import Footer from '../semantics/Footer';
import { ThemeProvider } from '../../providers/ThemeProvider';
const Layout = ({ children }) =>  {
  return (
    <Fragment>
      <ThemeProvider>
        <Nav />
        <main className="card-container">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}
Layout.protoTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout;
