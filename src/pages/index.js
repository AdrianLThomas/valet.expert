import * as React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';

export default function Home({ location }) {
  return (
    <Layout currentPath={location.pathname}>
      <Hero>
        <p>TODO! Some text...</p>
      </Hero>
    </Layout>
  );
}
