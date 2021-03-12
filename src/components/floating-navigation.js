import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link, withPrefix } from 'gatsby';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: '1px lightgrey solid',
    padding: 0,
  },
  action: {
    padding: 0,
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
