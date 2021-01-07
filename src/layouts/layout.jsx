import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';

import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import '../styles/normalize.css';
import '../styles/reset.css';
import '../styles/global.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Helmet>
        {/* FA imported again to support custom icons via data*/}
        <script
          src="https://kit.fontawesome.com/a56e5ab623.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  );
};

export default Layout;
