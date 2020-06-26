import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo/seo.component';
import {
  PrimaryHeading,
  Paragraph,
  StyledLink,
  lightColors,
} from '../components/global';
import logo from '../images/logo-small-dark.png';

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;
  }`;

const SectionWrapper = styled.section`
  margin: 8em 0.5em;
  
  @media only screen and (min-width: 750px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
`;

const IndexPage = () => (
  <SectionWrapper>
    <SEO title="Home" />
    <StyledImg src={logo} alt="Logo" />
    <PrimaryHeading pretty center style={{ color: lightColors.justiceJade }}>
      Our website is under construction!
    </PrimaryHeading>
    <Paragraph center style={{ color: lightColors.darkMode }}>
      Follow us on{' '}
      <StyledLink>
        <a href="https://linktr.ee/numulti">social media</a>
      </StyledLink>{' '}
      to stay updated!
    </Paragraph>
    <Paragraph center style={{ color: lightColors.darkMode }}>
      Contact us at{' '}
      <StyledLink>
        <a href="mailto">multinortheastern@gmail.com</a>
      </StyledLink>
    </Paragraph>
  </SectionWrapper>
);

export default IndexPage;
