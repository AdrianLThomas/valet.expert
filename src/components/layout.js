import React from "react"
import {useStaticQuery} from "gatsby"
import Navigation from "../components/navigation"
import layout from "./layout.module.scss"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  return <div>
        <Navigation></Navigation>
        {data.site.siteMetadata.siteUrl}
        {children}
      </div>
}