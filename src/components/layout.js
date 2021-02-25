import React from 'react';
// import { graphql, useStaticQuery } from "gatsby";
import Navigation from '../components/navigation';
import './layout.module.scss';
import { Container } from '@material-ui/core';
import '@fontsource/slabo-13px';

export default function Layout({ children, currentPath }) {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           siteUrl
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <>
      <Container>
        <Navigation currentPath={currentPath}></Navigation>
        {/* {data.site.siteMetadata.siteUrl} */}
        {children}
      </Container>
    </>
  );
}
