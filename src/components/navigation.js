import { Link, withPrefix } from 'gatsby';
import React from 'react';
import { selected, headerText, navLink } from './navigation.module.scss';
import '@fontsource/bangers';
import "@fontsource/dm-sans";
import { Grid } from '@material-ui/core';

const navItems = [
  { href: '/about-me/', label: 'About Me' },
  { href: '/services-and-pricing/', label: 'Services & Pricing' },
  { href: '/areas-covered/', label: 'Areas Covered' },
  { href: '/contact-me/', label: 'Contact Me' },
];

export default function Navigation({ currentPath }) {
  const isSelected = (href) =>
    withPrefix(href) === currentPath ? selected : '';
  return (
    <header>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} md={4}>
          <Link className={headerText} to="/">
            <h1>{"Matty's Mobile Valeting & Detailing"}</h1>
          </Link>
        </Grid>
        {navItems.map((navItem) => (
          <Grid item xs={6} sm={2} md={2} key={navItem.href}>
            <Link
              to={navItem.href}
              className={`${isSelected(navItem.href)} ${navLink}`}
            >
              {navItem.label}
            </Link>
          </Grid>
        ))}
      </Grid>
    </header>
  );
}
