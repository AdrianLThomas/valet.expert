import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Navigation from "../components/navigation";
import "./layout.module.scss";
import { Container, CssBaseline } from "@material-ui/core";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  return (
    <>
      <CssBaseline />
      <Container>
        <Navigation></Navigation>
        {data.site.siteMetadata.siteUrl}
        {children}
      </Container>
    </>
  );
}
