import React from 'react';
import { Container, Grid } from '@material-ui/core';

import SEO from '../components/seo/seo';
import SocialButton from '../components/social-button/social-button';
import Schedule from '../components/schedule/schedule';
import HeroGraphic from '../components/hero-graphic/hero-graphic';
import CTALink from '../components/cta-link/cta-link';
import socials from '../data/socials';

import '../styles/homepage.css';

const HomePage = () => (
  <div id="home-page">
    <SEO title="Home" />
    <Container fixed>
      <section>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} className="hero-text-container">
            <div className="hero-text">
              <span className="pretty-font greeting">hello, we are</span>
              <span className="multi-large">MULTI</span>
              <span className="hero-caption">
                Northeastern's Student Organization for Diversity and Inclusion
                in Tech
              </span>
              <div>
                {socials.map(({ name, link, fa_icon }) => (
                  <SocialButton key={name} link={link} faIconName={fa_icon} />
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroGraphic />
          </Grid>
        </Grid>
      </section>
      <section className="mission-statement">
        <h4>Our Mission</h4>
        <p>
          Northeastern’s Multi-diverse Unified Leaders in the Technology
          Industry (MULTI) aims to promote diversity and inclusion in the
          technology field, and to uplift and empower students from all
          backgrounds pursuing a career in the industry. MULTI fosters an
          inclusive learning community by hosting a variety of events, including
          group discussions, career talks, and workshops. MULTI also provides a
          platform for discussing student affairs and engaging with Khoury’s
          diversity and inclusion initiatives.
        </p>
        <br />
        <CTALink to="/team" title="Meet The Team" />
      </section>
      <section>
        <h4>See Us In Action</h4>
        <iframe
          className="video"
          height="500"
          src="https://www.youtube.com/embed/RgPsG-OZfT8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section>
        <h4>When and Where</h4>
        <Schedule />
      </section>
    </Container>
  </div>
);

export default HomePage;
