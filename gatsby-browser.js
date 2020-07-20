const React = require('react');

const Layout = require('./src/layout/layout').default;
require('./src/typefaces');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
