import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100vw',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    position: 'absolute',
    bottom: 0,
    height: '2.5rem',
    marginBottom: '-2.5rem',
    borderTop: '1px lightgrey solid',
  },
  left: {
    [theme.breakpoints.up('md')]: {
      float: 'left',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    paddingLeft: '1.5rem',
  },
  right: {
    [theme.breakpoints.up('md')]: {
      float: 'right',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    paddingRight: '1.5rem',
  },
  link: {
    color: 'darkred',
  },
}));

export default function Footer() {
  const classes = useStyles();
  const yearNow = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p
        className={classes.left}
      >{`© ${yearNow} - Matty's Mobile Valeting & Detailing, Scarborough, est. 2004`}</p>
      <p className={classes.right}>
        {`Developed & Designed by `}
        <a
          href="https://www.adrian-thomas.com"
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          Adrian L Thomas
        </a>
      </p>
    </footer>
  );
}
