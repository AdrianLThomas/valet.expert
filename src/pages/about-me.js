import * as React from 'react';

import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import Hero from '../components/hero';
import Layout from '../components/layout';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  heroTitle: {
    color: 'white',
    fontSize: '32px',
  },
  hero: {
    height: '100px',
    position: 'relative',
  },
}));

export default function AboutMe({ location }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: relativePath, order: DESC }
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "vans" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(aspectRatio: 0.85, quality: 15)
            }
          }
        }
      }
    }
  `);

  const remainingTiles = data.allFile.edges.slice(1).map((x) => ({
    image: x.node.childImageSharp.gatsbyImageData,
    alt: x.node.base,
  }));

  const now = new Date();
  const dateStartedInTrade = new Date(1999, 1);
  const yearsInTrade = now.getFullYear() - dateStartedInTrade.getFullYear();

  const dateBusinessStarted = new Date(2004, 1);
  const yearsRunning = now.getFullYear() - dateBusinessStarted.getFullYear();

  return (
    <Layout
      currentPath={location.pathname}
      description="My business was established in 2004 in the vibrant seaside town of
    Scarborough. The quality of my work is reflected by my 5 star reviews on Google and Facebook."
    >
      <Hero type="beading" classOverride={classes.hero}>
        <h2 className={classes.heroTitle}>{'About Me'}</h2>
      </Hero>
      <p>
        My business was established in 2004 in the vibrant seaside town of
        Scarborough.
      </p>

      <p>
        I have been in the trade for around {yearsInTrade} years, starting off
        as a valeter for Arundale Peugeot, Scarborough. I then assisted the
        running of a local valeting business, before seeing the opportunity to
        work for myself as a mobile valeter. The business has gone from strength
        to strength and continues it's success to this day.
      </p>

      <p>
        It's now {now.getFullYear()} and I've been running my own business for
        around {yearsRunning} years, operating within the area to provide a high
        quality, professional valeting service for thousands of customers
        throughout the region.
      </p>

      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
              <StaticImage
                src="../images/vans/2020 Custom Transit.jpg"
                alt="My 2020 Custom Transit"
              />
            </Grid>
          </Grid>
          <Grid container item spacing={2} xs={12} sm={6}>
            {remainingTiles.map((tile) => (
              <Grid item xs={6} sm={3} key={tile.alt}>
                <GatsbyImage {...tile} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
