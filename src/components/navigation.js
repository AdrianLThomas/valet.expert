import React from "react";
import css from "./navigation.module.scss";

const navItems = [
  { href: "/about-me/", label: "About Me" },
  { href: "/services-and-pricing/", label: "Services and Pricing" },
  { href: "/areas/", label: "Areas Covered" },
  { href: "/contact-me/", label: "Contact Me" },
]

export default function Navigation({ currentPath }) {
  const isSelected = (href) => href === currentPath ? css.selected : ''
  return (
    <header>
      <ul>
        <li><a className={css.headerText} href="/" >{"Matty's Mobile Valeting & Detailing"}</a></li>
        {navItems.map(navItem => (
          <li className={isSelected(navItem.href)} key={navItem.href}>
            <a href={navItem.href}
                  className={`${isSelected(navItem.href)} ${css.navItem}`}
                  >{navItem.label}</a>
          </li>
        ))}
      </ul>
    </header >
  );
}
