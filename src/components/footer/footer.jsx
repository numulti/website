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
    
    <Container fixed>
    <div className="footer-elements">
      <div className="footer-logos">
      <span className="footer-logo">
      <Logo />
      </span>
      <img src={require('../../images/Khoury.png')}/>
      <p>MULTI © {getYear()}</p>
      </div>
      <div className="footer-socials">
      <div className="footer-newsletter">
      <NewsletterForm />
      </div>
      <div className="footer-social">
      {
        socials.map(({ name, link, fa_icon }) => (
        <SocialButton key={name} link={link} faIconName={fa_icon} />
      ))}
      </div>
      </div>
      </div>
    </Container>
    
  </footer>
);

export default Footer;
