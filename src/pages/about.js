import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About-ME" />
        <h1>About Page</h1>
        <h2>
          occaecat et duis minim eiusmod irure culpa non. Aute anim ea officia
          officia laborum Lorem eu nisi veniam Lorem ut. Veniam Lorem sunt et
          aute eu mollit occaecat exercitation sunt cillum irure fugiat culpa.
          Sit esse ipsum ipsum excepteur veniam amet nostrud cillum Lorem
          commodo ullamco reprehenderit.
        </h2>
        <p>
          Want to work with me? <Link to="/contact">React out.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
