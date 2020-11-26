import React from 'react';
import { Link } from 'gatsby';

const DynamicLink = (props) => {
  const { to, children } = props;
  const link =
    props.to.substring(0, 1) === '/' ? (
      <Link {...props} to={to}>
        {children}
      </Link>
    ) : (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return link;
};

export default DynamicLink;
