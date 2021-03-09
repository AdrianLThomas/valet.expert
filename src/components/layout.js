import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { container } from './layout.module.scss';
import { Container } from '@material-ui/core';
import SEO from '../components/seo';

export default function Layout({ children, currentPath }) {
  return (
    <>
      <SEO />
      <Container className={container}>
        <Navigation currentPath={currentPath}></Navigation>
        {children}
        <Footer />
      </Container>
    </>
  );
}
