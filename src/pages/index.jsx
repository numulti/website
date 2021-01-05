import React from 'react';
import { Container } from '@material-ui/core';
import '../components/homepage/homepage.css';

import socials from '../data/socials';
import SocialButton from '../components/social-button/social-button';
import {MultiFistHero} from '../assets/icons'

import SEO from '../components/seo/seo';
import { Link } from 'gatsby';

const HomePage = () => (
  <div id="home-page">
    <SEO title="Home" />
    <Container fixed>
    <div className="hero">
    <div className="hero-text">
      <span className="pretty-font greeting">hello, we are</span>
      <span className="multi-large">MULTI</span>
      <span className="hero-caption">Northeastern's Student Organization for Diversity and Inclusion in Tech</span>
      <div>
      {
        socials.map(({ name, link, fa_icon }) => (
        <SocialButton key={name} link={link} faIconName={fa_icon} />
      ))}
      </div>
      </div>
      <MultiFistHero />
      </div>
      <section className="mission-statement">
      <h4>Our Mission</h4>
      <br />
      <p>Northeastern’s Multi-diverse Unified Leaders in the Technology Industry (MULTI) aims to promote diversity and inclusion in the technology field, and to uplift and empower students from all backgrounds pursuing a career in the industry. MULTI fosters an inclusive learning community by hosting a variety of events, including group discussions, career talks, and workshops. MULTI also provides a platform for discussing student affairs and engaging with Khoury’s diversity and inclusion initiatives.</p>
      <br/>
      <Link to='/team'><span className="pretty-link">meet the team</span></Link>
      </section>
      <section>
      <h2>See Us In Action</h2>
      <br />
      <iframe height="500" src="https://www.youtube.com/embed/RgPsG-OZfT8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </Container>
  </div>
);

export default HomePage;
