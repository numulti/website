import React from 'react';
import { Container } from '@material-ui/core';

import NewsletterForm from '../components/newsletter-form/newsletter-form';
import { SEO } from '../components/global';

const HomePage = () => (
  <div id="home-page">
    <SEO title="Home" />
    <Container fixed>
      <h1>Home</h1>
      <h2>Home</h2>
      <h3>Home</h3>
      <p>Text bgrbgrkjebg </p>
      <NewsletterForm />
    </Container>
  </div>
);

export default HomePage;
