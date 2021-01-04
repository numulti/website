import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { getYear } from '../../utils/date-utils';
import './footer.css';
import NewsletterForm from '../newsletter-form/newsletter-form';
import SocialButton from '../social-button/social-button';
import socials from '../../data/socials';
import { Logo } from '../../assets/logos';

const Footer = () => (
  <footer>
    <div className="footer-elements">
    <Container fixed>
      <Grid container>
      <Grid item><Logo /></Grid>
      </Grid>
      <NewsletterForm />
      {socials.map(({ name, link, fa_icon }) => (
        <SocialButton key={name} link={link} faIconName={fa_icon} />
      ))}
      <Grid item>MULTI © {getYear()}</Grid>
    </Container>
    </div>
  </footer>
);

export default Footer;
