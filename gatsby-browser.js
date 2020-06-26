const React = require('react');

const Layout = require('./src/layouts/layout').default;
require('./src/typefaces');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
