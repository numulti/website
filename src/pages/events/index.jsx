import React from 'react';
import { Container } from '@material-ui/core';

import { SEO, LargeHeading } from '../../components/global';

const EventsPage = () => (
  <>
    <SEO title="Events" />
    <section>
      <Container fixed>
        <LargeHeading pretty center>
          Events
        </LargeHeading>
      </Container>
    </section>
  </>
);

export default EventsPage;
