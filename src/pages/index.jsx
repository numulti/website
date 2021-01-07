import React from 'react';
import { Container } from '@material-ui/core';
import '../components/homepage/homepage.css';

import socials from '../data/socials';
import SocialButton from '../components/social-button/social-button';
import {MultiFistHero} from '../assets/icons'

import Schedule from '../components/schedule/schedule';

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
      <Link to='/team'><span className="pretty-link">meet the team</span><svg className="right-arrow" width="18" height="15" viewBox="0 0 114 172" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="arrow" d="M11.0129 171.999C7.83287 171.999 4.68286 170.629 2.50286 167.979C-1.35714 163.289 -0.677117 156.349 4.02288 152.499L84.9729 85.9987L4.02288 19.4987C-0.667118 15.6387 -1.34714 8.70871 2.50286 4.01871C6.36286 -0.681286 13.2929 -1.35129 17.9829 2.49871L109.013 77.2787C111.553 79.3687 113.033 82.4887 113.033 85.7787V86.2187C113.033 89.5087 111.563 92.6287 109.013 94.7187L17.9829 169.499C15.9429 171.179 13.4729 171.999 11.0129 171.999Z" fill="black"/>
</svg>
</Link>
      </section>
      <section>
      <h4>See Us In Action</h4>
      <br />
      <iframe height="500" src="https://www.youtube.com/embed/RgPsG-OZfT8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <section>
      <h4>When and Where</h4>
      <Schedule />
      </section>
    </Container>
  </div>
);

export default HomePage;
