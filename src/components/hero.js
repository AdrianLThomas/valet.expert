import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { container, background, heroTextbox } from './hero.module.scss';

export default function Hero({ children, type, classOverride }) {
  const data = useStaticQuery(
    graphql`
      query {
        van: file(relativePath: { eq: "Hero.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
        beading: file(relativePath: { eq: "Beading.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );

  return (
    <div className={container}>
      <GatsbyImage
        className={classOverride ? classOverride : background}
        image={data[type].childImageSharp.gatsbyImageData}
        alt="Hero Image"
      />
      <div className={heroTextbox}>{children}</div>
    </div>
  );
}
