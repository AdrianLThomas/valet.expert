import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BackgroundImage from 'gatsby-background-image';

const useStyles = makeStyles({
  background: {
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

const Background = ({ className, imageData, children }) => {
  const classes = useStyles();

  return (
    <BackgroundImage
      Tag="section"
      className={`${className} ${classes.background}`}
      fluid={imageData}
    >
      {children}
    </BackgroundImage>
  );
};

export default Background;
