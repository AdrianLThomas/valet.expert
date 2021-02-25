import React from 'react';
import css from './background.module.scss';

import BackgroundImage from 'gatsby-background-image';

const Background = ({ className, imageData, children }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={`${className} ${css.background}`}
      fluid={imageData}
    >
      {children}
    </BackgroundImage>
  );
};

export default Background;
