import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import buttonStyle from '../components/styles/button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#fafafa',
  },
  cardHeader: {
    textAlign: 'center',
    letterSpacing: '0.1em',
    fontWeight: 600,
  },
  button: buttonStyle,
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
