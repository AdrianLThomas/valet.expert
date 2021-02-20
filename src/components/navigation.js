import React from "react";
import css from "./navigation.module.scss";

const navItems = [
  { href: "/about-me", label: "About Me" },
  { href: "/services-and-pricing", label: "Services and Pricing" },
  { href: "/areas", label: "Areas Covered" },
  { href: "/contact-me", label: "Contact Me" },
]

export function GetCleanPath(path) {
  const splitPath = path.split('/');
  return `/${splitPath[splitPath.length - 2]}`;
}

export default function Navigation({ currentPath }) {
  const selectedPath = GetCleanPath(currentPath);
  const isSelected = (href) => href === selectedPath ? css.selected : ''
  return (
    <header>
      <h1>{"Matty's Mobile Valeting & Detailing"}</h1>
      <ul>
        {navItems.map(navItem => (
          <li className={isSelected(navItem.href)}>
            <a href={navItem.href} 
                  className={isSelected(navItem.href)}
                  >{navItem.label}</a>
          </li>
        ))}
      </ul>
    </header >
  );
}
