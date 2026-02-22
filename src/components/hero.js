import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { container, background, heroTextbox } from './hero.module.scss';

export default function Hero({ children, type, classOverride }) {
  const getHeroImage = () => {
    switch (type) {
      case 'van':
        return (
          <StaticImage
            className={classOverride ? classOverride : background}
            src="../images/Hero.jpg"
            alt="Hero image of my van"
            quality={80}
          />
        );
    }

    return (
      <StaticImage
        className={classOverride ? classOverride : background}
        src="../images/Beading.jpg"
        alt="Hero image of beading"
      />
    );
  };

  return (
    <div className={container}>
      {getHeroImage()}
      <div className={heroTextbox}>{children}</div>
    </div>
  );
}
