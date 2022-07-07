import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import CardGrid from '../card-grid.js';

const useStyles = makeStyles({
  icon: {
    display: 'block',
    margin: 'auto',
    fontSize: 50,
  },
});

export default function Introduction({ className }) {
  const { icon } = useStyles();
  const established = 2004;
  const now = new Date().getFullYear();

  const size = {
    xs: 12,
    sm: 6,
    md: 3,
  };
  const items = [
    {
      title: 'Reputable',
      description: `Established in ${established}, I have been detailing for customers in Scarborough for over ${
        now - established
      } years. The quality of my work is reflected by my 5 star reviews on Google and Facebook.`,
      button: { text: 'About Me', href: '/about-me/' },
      icon: <ThumbUpIcon className={icon} />,
      size,
    },
    {
      title: 'My Services',
      description:
        'I provide a range of services and with the correct package, I will get your pride and joy looking as good as the day it came out of the showroom.',
      button: { text: 'Services & Pricing', href: '/services-and-pricing/' },
      icon: <MapIcon className={icon} />,
      size,
    },
    {
      title: 'Flexible',
      description:
        "I can come to you, whether it's your place of work or home. I'm available Monday - Saturday and I cover the entire Scarborough area, including most of North Yorkshire.",

      button: { text: 'Areas Covered', href: '/areas-covered/' },
      icon: <SettingsIcon className={icon} />,
      size,
    },
    {
      title: 'Get In Touch',
      description:
        "I'm easy to get hold of, just call or leave me a message at your convenience.",
      button: { text: 'Contact Me', href: '/contact-me/' },
      icon: <ChatIcon className={icon} />,
      size,
    },
  ];

  return <CardGrid className={className} cards={items} />;
}
