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
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: '1px'
  },
  cardBackground: {
    // backgroundImage: 'url("https://source.unsplash.com/random/278x232")'
  },
  iconSize: {
    fontSize: '2em',
  },
}));

export default function ({ className }) {
  const classes = useStyles();

  const fontSize = 'large';
  const tiers = [
    {
      title: 'Reputable',
      description:
        'Established in 2004 in the vibrant seaside town of Scarborough.',
      buttonText: 'About Me',
      buttonVariant: 'contained',
    },
    {
      title: 'Flexible',
      description:
        "I can come to you, whether it's your place of work, study or home.",
      buttonText: 'Areas Covered',
      buttonVariant: 'contained',
    },
    {
      title: 'My Services',
      description:
        ' sasasa sasas sa sa saas sa sa as sa sa sa saa sas assa sa saas as as',
      buttonText: 'Services & Pricing',
      buttonVariant: 'contained',
    },
    {
      title: 'Contact Me',
      description:
        "I'm easy to get hold of, just call or message at your convenience.",
      buttonText: 'Contact Me',
      buttonVariant: 'contained',
    },
  ];

  return (
    <Grid container spacing={5} alignItems="flex-end" className={className}>
      {tiers.map((tile) => (
        <Grid item key={tile.title} xs={12} sm={6} md={3}>
          <Card className={classes.cardBackground} variant="outlined">
            <CardHeader
              title={tile.title}
              className={classes.cardHeader}
            />
            <CardContent>
              <ul>
                <Typography component="li" variant="subtitle1" align="center" className={classes.cardText}>
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
