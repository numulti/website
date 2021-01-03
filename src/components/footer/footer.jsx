import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { getYear } from '../../utils/date-utils';
import './footer.css';
import NewsletterForm from '../newsletter-form/newsletter-form';
import SocialButton from '../social-button/social-button';
import socials from '../../data/socials';

const Footer = () => (
  <footer>
    <Container fixed>
      <Grid container>
        <Grid item>MULTI © {getYear()}</Grid>
      </Grid>
      <NewsletterForm />
      {socials.map(({ name, link, fa_icon }) => (
        <SocialButton key={name} link={link} faIconName={fa_icon} />
      ))}
    </Container>
  </footer>
);

export default Footer;
