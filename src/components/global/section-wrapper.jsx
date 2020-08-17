import React from 'react';

const SectionWrapper = (component) => {
  return function wrapComponent() {
    return <section style={{ margin: '3em 0' }}>{component}</section>;
  };
};

export default SectionWrapper;
