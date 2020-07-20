import React from 'react';

import '../styles/normalize.css';
import '../styles/reset.css'
import '../styles/global.css';

const Layout = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
