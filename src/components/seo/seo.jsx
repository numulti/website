import React from 'react';
import { Helmet } from 'react-helmet';

import seo from '../../data/seo';

const SEO = ({ title }) => {
  return (
    <Helmet
      title={title}
      titleTemplate={`${seo.site.title} | %s`}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: `description`,
          content: `${seo.metadata.description}`,
        },
        {
          name: `keywords`,
          content: `${seo.metadata.keywords}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default SEO;
