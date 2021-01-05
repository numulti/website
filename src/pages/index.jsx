import React from 'react';
import { Container } from '@material-ui/core';

import SEO from '../components/seo/seo';

const HomePage = () => (
  <div id="home-page">
    <SEO title="Home" />
    <Container fixed>
      <h1>Home</h1>
    </Container>
  </div>
);

export default HomePage;
