import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  cardText: {
    padding: 0,
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: '1.4em',
    margin: '10px 0 15px 0',
  },
  cardBackground: {
    height: '100%'
  },
  button: {
    textAlign: 'center',
    fontSize: '1em',
    border: '1px solid black',
    padding: '10px',
    width: '100%',
    fontWeight: 'bold',
    '&:hover': {
      border: '2px solid black',
      margin: '-1px',
      transform: 'translateY(3px)',
    },
    transition: 'transform 500ms',
    willChange: 'transform',
  },
}));

export default function ({ className }) {
  const classes = useStyles();
  const established = 2004;
  const now = new Date().getFullYear();

  const tiers = [
    {
      title: 'Reputable',
      description: `Established in ${established}, I have been detailing for customers in Scarborough for over ${
        now - established
      } years. The quality of my work is reflected by my 5 star reviews on Google and Facebook.`,
      buttonText: 'About Me',
      buttonVariant: 'contained',
      href: '/about-me/',
    },
    {
      title: 'My Services',
      description:
        'I provide a range of services and with the correct package, I will get your pride and joy looking as good as the day it came out of the showroom.',
      buttonText: 'Services & Pricing',
      buttonVariant: 'contained',
      href: '/services-and-pricing/',
    },
    {
      title: 'Flexible',
      description:
        "I can come to you, whether it's your place of work or home. I'm available Monday - Saturday and I cover the entire Scarborough area, including most of North Yorkshire.",

      buttonText: 'Areas Covered',
      buttonVariant: 'contained',
      href: '/areas-covered/',
    },
    {
      title: 'Contact Me',
      description:
        "I'm easy to get hold of, just call or leave me a message at your convenience.",
      buttonText: 'Contact Me',
      buttonVariant: 'contained',
      href: '/contact-me/',
    },
  ];

  return (
    <Grid container spacing={1} alignItems="flex-end" className={className}>
      {tiers.map((tile) => (
        <Grid item key={tile.title} xs={12} sm={6} md={3}>
          <Card className={classes.cardBackground} variant="outlined">
            <h4 className={classes.cardHeader}>{tile.title}</h4>
            <CardContent className={classes.cardText}>
              <ul>
                <Typography component="li" variant="subtitle1" align="center">
                  {tile.description}
                </Typography>
              </ul>
            </CardContent>
            <CardActions>
              <Link to={tile.href} className={classes.button}>
                {tile.buttonText}
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
