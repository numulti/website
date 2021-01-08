import React from 'react';

import DynamicLink from '../dynamic-link/dynamic-link';
import { ChevronRightIcon } from '../../assets/icons';
import './cta-link.css';

const CTALink = ({ to, title }) => {
  return (
    <DynamicLink to={to}>
      <div className="cta-link">
        <span className="pretty-link">{title}</span>
        <ChevronRightIcon />
      </div>
    </DynamicLink>
  );
};

export default CTALink;
