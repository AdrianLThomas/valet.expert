import * as React from 'react';

import Layout from '../components/layout';

export default function Home({ location }) {
  return (
    <Layout currentPath={location.pathname}>
      <p>todo</p>
      <p>https://schema.org/address</p>
      <p>https://schema.org/openingHoursSpecification </p>
    </Layout>
  );
}
