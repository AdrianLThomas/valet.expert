import * as React from 'react';
import StyledBackgroundSection from './background';
import css from './hero.module.scss';
import { graphql, useStaticQuery } from 'gatsby'
import './layout.module.scss';

export default function Hero({ children }) {
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

  return (
    <div className={css.container}>
      <StyledBackgroundSection className={css.background} imageData={data.desktop.childImageSharp.fluid}></StyledBackgroundSection>
    </div>
  );
}
