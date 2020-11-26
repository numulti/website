import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { getYear } from '../../utils/date-utils';
import './footer.css';

const Footer = () => (
  <footer>
    <Container fixed>
      <Grid container>
        <Grid item>MULTI © {getYear()}</Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;
