import React from 'react';
import { Container } from '@material-ui/core';

import { SEO } from '../../components/global';

const NotFoundPage = () => (
  <section>
    <Container fixed>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </section>
);

export default NotFoundPage;
