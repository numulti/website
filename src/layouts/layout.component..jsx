import React, { useState } from 'react';

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
