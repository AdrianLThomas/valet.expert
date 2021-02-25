import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import css from './background.module.scss';

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Hero.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={`${className} ${css.background}`}
      fluid={imageData}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  )
}

export default BackgroundSection