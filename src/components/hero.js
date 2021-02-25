import * as React from 'react';
import css from './hero.module.scss';
import './layout.module.scss';

export default function Hero({ children }) {
  return (
    <div className={css.container}>
      <div className={css.background}>{children}</div>
    </div>
  );
}
