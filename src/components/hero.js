import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Background from './background';
import { container, background, heroTextbox } from './hero.module.scss';

export default function Hero({ children, type, classOverride }) {
  const data = useStaticQuery(
    graphql`
      query {
        van: file(relativePath: { eq: "Hero.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 2160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        beading: file(relativePath: { eq: "Beading.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 2160, maxHeight: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <div className={container}>
      <Background
        className={classOverride ? classOverride : background}
        imageData={data[type].childImageSharp.fluid}
      >
        <div className={heroTextbox}>{children}</div>
      </Background>
    </div>
  );
}
