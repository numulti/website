import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';

import '../styles/normalize.css';
import '../styles/reset.css';
import '../styles/global.css';
import './layout.styles.css';

const Layout = ({ children }) => {
  /* Blurs content when small screen navigation is open */
  const [blurInnerContent, setBlurInnerContent] = useState(false);

  return (
    <div id="layout">
      <Helmet>
        {/* FA imported again to support custom icons via queries*/}
        <script
          src="https://kit.fontawesome.com/a56e5ab623.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <NavBar toggleBlur={() => setBlurInnerContent(!blurInnerContent)} />
      <div
        className={`layout-inner-content ${
          blurInnerContent ? 'layout-inner-content-blur' : ''
        }`}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
