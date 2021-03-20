import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';

import { root, cardHeader, button } from './card-grid.module.scss';

export default function CardGrid({ className, cards }) {
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
