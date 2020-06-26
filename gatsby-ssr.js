const React = require('react');
const Layout = require('./src/layouts/layout.component').default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
