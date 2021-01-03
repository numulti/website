import React from 'react';
import { Container } from '@material-ui/core';

import SEO from '../components/seo/seo';
import TempHomePage from '../components/temp-homepage/temp-homepage';

const HomePage = () => (
  <div id="home-page">
    <SEO title="Home" />
    {/* <Container fixed>
      <h1>Home</h1>
    </Container> */}
    <TempHomePage />
  </div>
);

export default HomePage;
