import React from "react"

export default function AboutMe({ data }) {
  return <p>All About Me - {data.site.siteMetadata.title}</p>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
