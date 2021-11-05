import React from 'react';

import { Grid } from '@material-ui/core';
import { Link, withPrefix } from 'gatsby';

import { selected, headerText, navLink } from './navigation.module.scss';

import '@fontsource/dm-sans';

export default function Navigation({
  currentPath,
  navigationItems,
  className,
}) {
  const isSelected = (href) =>
    withPrefix(href) === currentPath ? selected : '';
  return (
    <header className={className}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={4} md={4}>
          <Link className={headerText} to="/">
            <h1>{"Matty's Mobile Valeting & Detailing"}</h1>
          </Link>
        </Grid>
        {navigationItems.map((navItem) => (
          <Grid item xs={6} sm={2} md={2} key={navItem.href} id="top-nav-links">
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
