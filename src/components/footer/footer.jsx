import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { getYear } from '../../utils/date-utils';
import './footer.css';
import NewsletterForm from '../newsletter-form/newsletter-form';

const Footer = () => (
  <footer>
    <Container fixed>
      <Grid container>
        <Grid item>MULTI © {getYear()}</Grid>
      </Grid>
      <NewsletterForm />
    </Container>
  </footer>
);

export default Footer;
