import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
});

export default function FloatingNavigation({ navigationItems, className }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={`${classes.root} ${className}`}
    >
      {navigationItems.map((nav) => (
        <Link to={nav.href} key={nav.href}>
          <BottomNavigationAction
            icon={nav.icon}
            label={nav.label}
            showLabel={true}
          />
        </Link>
      ))}
    </BottomNavigation>
  );
}
