import * as React from 'react';
import Layout from '../components/layout';

export default function Home({ location }) {
  return (
    <Layout currentPath={location.pathname}>
      <p>Hello</p>
      https://schema.org/openingHoursSpecification
      https://schema.org/address
    </Layout>
  );
}
