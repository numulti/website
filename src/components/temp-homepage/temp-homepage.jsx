import React from 'react';
import { Container } from '@material-ui/core';

import Schedule from '../schedule/schedule';
import NewsletterForm from '../newsletter-form/newsletter-form';
import SocialButton from '../social-button/social-button';
import { Logo } from '../../assets/logos';
import socials from '../../data/socials';
import './temp-homepage.css';

const TempHomePage = () => {
  return (
    <div className="v-align-container">
      <Container fixed>
        <section className="temp-home-logo">
          <Logo />
        </section>
        <p>
          MULTI is a student organization in Northeastern University advocating
          for diversity and inclusion in technology. It is founded under the
          Khoury College of Computer Sciences, and is based in Boston,
          Massachusetts.
        </p>
        <Schedule />
      </Container>
    </div>
  );
};

export default TempHomePage;
