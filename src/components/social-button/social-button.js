import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DynamicLink from '../dynamic-link/dynamic-link';
import './social-button.css';

const SocialButton = ({ link, faIcon, faIconName }) => {
  return (
    <div className="social-btn-container">
      <DynamicLink to={link}>
        <button className="social-btn">
          {(!!faIcon && <FontAwesomeIcon icon={faIcon} />) ||
            (!!faIconName && <i className={faIconName}></i>)}
        </button>
      </DynamicLink>
    </div>
  );
};

export default SocialButton;
