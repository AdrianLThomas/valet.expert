import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardHeader: {
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    fontSize: '1em',
    padding: '10px',
    width: '100%',
    fontWeight: 'bold',
    transition: 'transform 500ms',
    willChange: 'transform',
    border: '1px solid black',
    '&:hover': {
      transform: 'translateY(3px)'
    }
  },
});

export default function CardGrid({ className, cards }) {
  const { root, cardHeader, button } = useStyles();

  return (
    <Grid container spacing={1} alignItems="stretch" className={className}>
      {cards.map((card) => (
        <Grid item key={card.title} {...card.size}>
          <Card className={root}>
            <CardContent>
              {card.icon}
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={cardHeader}
              >
                {card.title}
              </Typography>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={card.button.href} className={button}>
                {card.button.text}
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
