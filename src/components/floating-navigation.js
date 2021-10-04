import React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import makeStyles from '@mui/styles/makeStyles';
import { Link, withPrefix } from 'gatsby';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: '1px lightgrey solid',
    padding: 0,
    margin: 0,
  },
  action: {
    '&$selected': {
      color: 'black',
    },
    padding: 0,
  },
  selected: {
    // intentionally empty
    // generated to work with DOM
  },
});

export default function FloatingNavigation({
  currentPath,
  navigationItems,
  className,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(currentPath);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newPath) => {
        setValue(newPath);
      }}
      showLabels
      className={`${classes.root} ${className}`}
    >
      {navigationItems.map((nav) => (
        <BottomNavigationAction
          className={classes.action}
          classes={{ selected: classes.selected }}
          key={nav.href}
          component={Link}
          to={nav.href}
          icon={nav.icon}
          label={nav.shortLabel}
          value={withPrefix(nav.href)}
        />
      ))}
    </BottomNavigation>
  );
}
