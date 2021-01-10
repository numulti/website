import React from 'react';

import SocialButton from '../social-button/social-button';
import socials from '../../data/socials';
import './social-links.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socials.map(({ name, link, fa_icon }) => (
        <SocialButton key={name} link={link} faIconName={fa_icon} />
      ))}
    </div>
  );
};

export default SocialLinks;
