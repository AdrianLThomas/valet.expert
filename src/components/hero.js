import * as React from 'react';
import Background from './background';
import css from './hero.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import './layout.module.scss';

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
    <div className={css.container}>
      <Background
        className={css.background}
        imageData={data.desktop.childImageSharp.fluid}
      >
        {children}
      </Background>
    </div>
  );
}
