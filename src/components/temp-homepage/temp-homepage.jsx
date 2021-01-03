import React from 'react';
import { Container } from '@material-ui/core';

import Schedule from '../schedule/schedule';
import NewsletterForm from '../newsletter-form/newsletter-form';
import SocialButton from '../social-button/social-button';
import socials from '../../data/socials';

const verticalAlign = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const TempHomePage = () => {
  return (
    <div style={verticalAlign}>
      <Container fixed>
        <h1>MULTI</h1>
        <p>
          MULTI is a student organization in Northeastern University advocating
          for diversity and inclusion in technology. It is founded under the
          Khoury College of Computer Sciences, and is based in Boston,
          Massachusetts.
        </p>
        <div style={{ marginTop: '1em', marginBottom: '3em' }}>
          <Schedule />
        </div>
        <NewsletterForm />
        {socials.map(({ name, link, fa_icon }) => (
          <SocialButton key={name} link={link} faIconName={fa_icon} />
        ))}
      </Container>
    </div>
  );
};

export default TempHomePage;
