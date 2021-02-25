import * as React from 'react';
import StyledBackgroundSection from './background';
import css from './hero.module.scss';
import './layout.module.scss';

export default function Hero({ children }) {
  return (
    <div className={css.container}>
      <StyledBackgroundSection className={css.background}></StyledBackgroundSection>
    </div>
  );
}
