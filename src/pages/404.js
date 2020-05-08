import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <div>
      <Layout>
        <Head title="404 Not Found" />
        <h1>Page not Found</h1>
        <p>
          <Link to="/">Head to Home Page</Link>
        </p>
      </Layout>
    </div>
  )
}

export default NotFound
