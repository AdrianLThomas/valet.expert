import React from 'react'
import css from './background.module.scss';

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, imageData }) => {
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