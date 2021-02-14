import * as React from "react"
import Button from '@material-ui/core/Button';
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Button variant="contained">Hello World</Button>
      </div>
    </Layout>
  )
}
