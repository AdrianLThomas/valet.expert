import * as React from "react"
import Button from '@material-ui/core/Button';
import Layout from "../components/layout"

export default function Home({location}) {
  return (
    <Layout currentPath={location.pathname}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Button variant="contained">Hello World</Button>
      
      
    </Layout>
  )
}
