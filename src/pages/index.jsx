import React from 'react';

import SEO from '../components/global/seo';
import {
  PrimaryHeading,
  Paragraph,
} from '../components';

const IndexPage = () => (
  <section>
    <SEO title="Home" />
    <PrimaryHeading pretty>Our website is under construction!</PrimaryHeading>
    <Paragraph strong>Follow us on social media to stay updated on all things MULTI!</Paragraph>
    <Paragraph>Contact us at multinortheastern@gmail.com</Paragraph>
  </section>
);

export default IndexPage;
