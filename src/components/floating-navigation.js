import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withPrefix } from 'gatsby';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.08)',
    padding: '4px 0',
    margin: 0,
    backgroundColor: '#ffffff',
  },
  action: {
    '&$selected': {
      color: 'rgba(52, 152, 219, 1)',
    },
    padding: '4px 0',
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
