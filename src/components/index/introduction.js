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
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatIcon from '@material-ui/icons/Chat';
import {
  root,
  cardContent,
  cardHeader,
  button,
} from './introduction.module.scss';

const useStyles = makeStyles({
  icon: {
    display: 'block',
    margin: 'auto',
    fontSize: 50,
  },
});

export default function ({ className }) {
  const { icon } = useStyles();
  const established = 2004;
  const now = new Date().getFullYear();

  const tiers = [
    {
      title: 'Reputable',
      description: `Established in ${established}, I have been detailing for customers in Scarborough for over ${
        now - established
      } years. The quality of my work is reflected by my 5 star reviews on Google and Facebook.`,
      buttonText: 'About Me',
      href: '/about-me/',
      icon: <ThumbUpIcon className={icon} />,
    },
    {
      title: 'My Services',
      description:
        'I provide a range of services and with the correct package, I will get your pride and joy looking as good as the day it came out of the showroom.',
      buttonText: 'Services & Pricing',
      href: '/services-and-pricing/',
      icon: <MapIcon className={icon} />,
    },
    {
      title: 'Flexible',
      description:
        "I can come to you, whether it's your place of work or home. I'm available Monday - Saturday and I cover the entire Scarborough area, including most of North Yorkshire.",

      buttonText: 'Areas Covered',
      href: '/areas-covered/',
      icon: <SettingsIcon className={icon} />,
    },
    {
      title: 'Contact Me',
      description:
        "I'm easy to get hold of, just call or leave me a message at your convenience.",
      buttonText: 'Contact Me',
      href: '/contact-me/',
      icon: <ChatIcon className={icon} />,
    },
  ];

  return (
    <Grid container spacing={1} alignItems="stretch" className={className}>
      {tiers.map((tile) => (
        <Grid item key={tile.title} xs={12} sm={6} md={3}>
          <Card className={root}>
            <CardContent className={cardContent}>
              {tile.icon}
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={cardHeader}
              >
                {tile.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {tile.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={tile.href} className={button}>
                {tile.buttonText}
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
