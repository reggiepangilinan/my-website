/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const { first, get } = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query GetAllBlogPostSlug {
      allContentfulBlogPost {
        edges {
          node {
            id
            compose__page {
              slug
              title
            }
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    const post = get(edge, "node")
    const postPage = first(get(post, "compose__page"))
    console.info(postPage.slug)
    console.info(post.id)
    try {
      createPage({
        path: `/blog/${postPage.slug}`,
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
