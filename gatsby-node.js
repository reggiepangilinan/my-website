/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const { get } = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query GetAllBlogPostSlug {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  if(!response.data) return;

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    const post = get(edge, "node")
    try {
      createPage({
        path: `/blog/${post.slug}`,
        component: path.resolve("./src/templates/blog-post.template.tsx"),
        context: {
          id: post.id,
        },
      })
    } catch (e) {
      console.error("Error generating blog post")
      console.error(e)
    }
  })
}
