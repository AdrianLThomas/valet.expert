import * as React from 'react';
import Layout from '../components/layout';
import Services from '../components/pricing/services';

export default function Home({ location }) {
  return (
    <Layout currentPath={location.pathname}>
      <h1>{'Services & Pricing'}</h1>
      <Services />
    </Layout>
  );
}
