import React from 'react';
import { Container } from '@material-ui/core';

import SEO from '../../components/seo/seo';

const NotFoundPage = () => (
  <div id="not-found-page">
    <Container fixed>
      <SEO title="404: Not found" />
      <h1>Page Not Found</h1>
      <p>This page doesn&#39;t exist... awkward.</p>
    </Container>
  </div>
);

export default NotFoundPage;
