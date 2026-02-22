import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/hero';
import Layout from '../components/layout';

const useStyles = makeStyles(() => ({
  heroTitle: {
    color: 'white',
    fontSize: '32px',
  },
  hero: {
    height: '100px',
    position: 'relative',
  },
}));

const NotFoundPage = ({ location }) => {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname} description="404 page not found">
      <Hero type="beading" classOverride={classes.hero}>
        <h2 className={classes.heroTitle}>{'404 page not found'}</h2>
      </Hero>
      <p>
        Sorry, we couldn’t find what you were looking for. Please try one of the
        links in the navigation bar.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
