import * as React from 'react';
import Background from './background';
import { container, background, heroTextbox } from './hero.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

export default function Hero({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Hero.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 2160) {
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
        className={background}
        imageData={data.desktop.childImageSharp.fluid}
      >
        <div className={heroTextbox}>{children}</div>
      </Background>
    </div>
  );
}
