import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const navItems = [
  { href: "/", label: "Home"},
  { href: "/about-me", label: "About Me"},
  { href: "/services-and-pricing", label: "Services and Pricing"},
  { href: "/areas", label: "Areas Covered"},
  { href: "/contact-me", label: "Contact Me"},
]

export function GetCleanPath(path) {
  const splitPath = path.split('/');
  return `/${splitPath[splitPath.length - 2]}`;
}

export default function Navigation({currentPath}) {
  const classes = useStyles();
  const cleanPath = GetCleanPath(currentPath);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={navItems.findIndex(x => x.href === cleanPath)}>
          {navItems.map(navItem => <Tab {...navItem} key={navItem.href}></Tab>)}
        </Tabs>
      </AppBar>
    </div>
  );
}
