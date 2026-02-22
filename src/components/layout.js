import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import PaymentIcon from '@material-ui/icons/Payment';

import Footer from '../components/footer';
import Navigation from '../components/navigation';
import SEO from '../components/seo';
import FloatingNavigation from './floating-navigation';
import { container, root } from './layout.module.scss';

const useStyles = makeStyles((theme) => {
  const mobile = theme.breakpoints.down('xs');
  const notMobile = theme.breakpoints.up('sm');
  return {
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
  { href: '/', label: 'Home', shortLabel: 'Home', icon: <HomeIcon /> },
  {
    href: '/about-me/',
    label: 'About Me',
    shortLabel: 'About',
    icon: <InfoIcon />,
  },
  {
    href: '/services-and-pricing/',
    label: 'Services & Pricing',
    shortLabel: 'Pricing',
    icon: <PaymentIcon />,
  },
  {
    href: '/areas-covered/',
    label: 'Areas Covered',
    shortLabel: 'Areas',
    icon: <MapIcon />,
  },
  {
    href: '/contact-me/',
    label: 'Contact Me',
    shortLabel: 'Contact',
    icon: <ContactPhoneIcon />,
  },
];

export default function Layout({ children, currentPath, description }) {
  const classes = useStyles();

  return (
    <>
      <SEO descriptionOverride={description} />
      <div className={root}>
        <Container className={container}>
          <Navigation
            className={classes.topNav}
            currentPath={currentPath}
            navigationItems={navItems.slice(1)}
          ></Navigation>
          {children}
        </Container>
        <Footer />
      </div>
      <FloatingNavigation
        className={classes.bottomNav}
        currentPath={currentPath}
        navigationItems={navItems}
      />
    </>
  );
}
