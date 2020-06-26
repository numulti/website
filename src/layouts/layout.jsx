import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import { LayoutStyle } from './layout.styles.jsx';

const Layout = ({ children }) => {
  return (
    <main>
      <LayoutStyle/>
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
