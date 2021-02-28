import React from 'react';
import Navigation from '../components/navigation';
import './layout.module.scss';
import { Container } from '@material-ui/core';

export default function Layout({ children, currentPath }) {
  return (
    <>
      <Container>
        <Navigation currentPath={currentPath}></Navigation>
        {children}
      </Container>
    </>
  );
}
