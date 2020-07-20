import React from 'react';

import { Container } from '@material-ui/core';
import { SEO, LargeHeading } from '../components/global';

const HomePage = () => (
  <>
    <SEO title="Home" />
    <section>
      <Container fixed>
        <LargeHeading pretty center>
          Home
        </LargeHeading>
      </Container>
    </section>
  </>
);

export default HomePage;
