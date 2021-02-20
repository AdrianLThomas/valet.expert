import * as React from "react"
import Layout from "../components/layout"

export default function AboutMe({ location }) {
  return (<Layout currentPath={location.pathname}>
    <h1>{"About Matty's Mobile Valeting & Detailing, est. 2004"}</h1>
    <p>My business was established in 2004 in the vibrant seaside town of Scarborough.</p>

    <p>I have been in the trade for around 22 years, starting off as a valeter for Arundale Peugeot, Scarborough. I then assisted the running of a local valeting business, before seeing the opportunity to work for myself as a mobile valeter. The business has gone from strength to strength and continues it's success to this day.</p>

    <p>It's now 2021 and I've been running my own business for around 17 years, operating within the area to provide a high quality, professional valeting service for thousands of customers throughout the region.</p>
  </Layout>)
}
