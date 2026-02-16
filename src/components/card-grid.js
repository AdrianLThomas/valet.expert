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
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    '&:hover': {
      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(-2px)',
    },
  },
  cardContent: {
    padding: '28px 24px 16px',
  },
  cardHeader: {
    textAlign: 'center',
    letterSpacing: '0.05rem',
    fontWeight: 600,
  },
  cardActions: {
    padding: '8px 24px 24px',
  },
  button: buttonStyle,
});

export default function CardGrid({ className, cards }) {
  const { root, cardHeader, cardContent, cardActions, button } = useStyles();

  return (
    <Grid container spacing={3} alignItems="stretch" className={className}>
      {cards.map((card) => (
        <Grid item key={card.title} {...card.size}>
          <Card className={root}>
            <CardContent className={cardContent}>
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
            <CardActions className={cardActions}>
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
