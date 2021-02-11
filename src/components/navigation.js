import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return <nav>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/services-and-pricing">Services And Pricing</Link>
        <Link to="/areas">Areas Covered</Link>
        <Link to="/contact-me">Contact Me</Link>
  </nav>
}