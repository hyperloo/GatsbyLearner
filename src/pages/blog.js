import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/Head"

import BlogStyle from "./blog.module.scss"

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           excerpt
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title="Blogs" />
        <h1>Blog Page</h1>
        <ol className={BlogStyle.posts}>
          {/* {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })} */}
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
