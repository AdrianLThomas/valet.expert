import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { container } from './layout.module.scss';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PaymentIcon from '@material-ui/icons/Payment';
import MapIcon from '@material-ui/icons/Map';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import SEO from '../components/seo';
import FloatingNavigation from './floating-navigation';

const useStyles = makeStyles((theme) => {
  const mobile = theme.breakpoints.down('xs');
  const notMobile = theme.breakpoints.up('sm');
  return {
    container: {
      [mobile]: {
        marginBottom: '10rem',
      },
    },
    topNav: {
      [mobile]: {
        '& #top-nav-links': {
          display: 'none',
        },
      },
    },
    bottomNav: {
      [notMobile]: {
        display: 'none',
      },
    },
  };
});

const navItems = [
  { href: '/', label: 'Home', icon: <HomeIcon /> },
  { href: '/about-me/', label: 'About Me', icon: <InfoIcon /> },
  {
    href: '/services-and-pricing/',
    label: 'Services & Pricing',
    icon: <PaymentIcon />,
  },
  { href: '/areas-covered/', label: 'Areas Covered', icon: <MapIcon /> },
  { href: '/contact-me/', label: 'Contact Me', icon: <ContactPhoneIcon /> },
];

export default function Layout({ children, currentPath }) {
  const classes = useStyles();

  return (
    <>
      <SEO />
      <Container className={`${container} ${classes.container}`}>
        <Navigation
          className={classes.topNav}
          currentPath={currentPath}
          navigationItems={navItems.slice(1)}
        ></Navigation>
        {children}
        <Footer />
      </Container>
      <FloatingNavigation
        className={classes.bottomNav}
        navigationItems={navItems}
      />
    </>
  );
}
