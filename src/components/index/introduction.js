import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  cardText: {
    padding: 0,
    height: '170px'
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: '500px'
  },
  cardBackground: {
  },
  iconSize: {
    fontSize: '2em',
  },
}));

export default function ({ className }) {
  const classes = useStyles();
  const established = 2004;
  const now = new Date().getFullYear();

  const tiers = [
    {
      title: 'Reputable',
      description:
        `Established in ${established}, I have been detailing for customers in Scarborough for over ${now - established} years. The quality of my work is reflected by my 5 star reviews on Google and Facebook.`,
      buttonText: 'About Me',
      buttonVariant: 'contained',
    },
    {
      title: 'Flexible',
      description:
        "I can come to you, whether it's your place of work or home. I'm available Monday - Saturday and I cover the entire Scarborough area, including most of North Yorkshire.",

      buttonText: 'Areas Covered',
      buttonVariant: 'contained',
    },
    {
      title: 'My Services',
      description:
        'I provide a range of services: mini valet, full valet, hand & wax, machine polish and ceramic coating. With the correct package, I will get your pride and joy looking as good as the day it came out of the showroom.',
      buttonText: 'Services & Pricing',
      buttonVariant: 'contained',
    },
    {
      title: 'Contact Me',
      description:
        "I'm easy to get hold of, just call or leave me a message at your convenience.",

      buttonText: 'Contact Me',
      buttonVariant: 'contained',
    },
  ];

  return (
    <Grid container spacing={1} alignItems="flex-end" className={className}>
      {tiers.map((tile) => (
        <Grid item key={tile.title} xs={12} sm={6} md={3}>
          <Card className={classes.cardBackground} variant="outlined">
            <CardHeader
              title={tile.title}
              className={classes.cardHeader}
              titleTypographyProps={{variant:'h4'}}
            />
            <CardContent className={classes.cardText}>
              <ul>
                <Typography component="li" variant="subtitle1" align="center">
                  {tile.description}
                </Typography>
              </ul>
            </CardContent>
            <CardActions>
              <Button fullWidth variant={tile.buttonVariant} color="primary">
                {tile.buttonText}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
