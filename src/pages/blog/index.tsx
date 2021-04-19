import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { first, get } from "lodash"
import * as React from "react"
import AnimatedSlideUpDiv from "../../components/animated-slideup-div/animated-slideup-div.component"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./blog.component.scss"

type BlogProps = {
  data: any
}

const Blog: React.FC<BlogProps> = ({ data }: BlogProps) => {
  const blogPostsExcerpts: any[] = get(data, "allContentfulBlogPost.edges")
  console.log(blogPostsExcerpts)
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog">
        <AnimatedSlideUpDiv>
          <h1>
            <span className="gradient1">Blog posts</span>
          </h1>
          <h4>Checkout my latest posts 😉👍</h4>
        </AnimatedSlideUpDiv>

        {blogPostsExcerpts.map((p, i) => {
          const post = get(p, "node")
          const postPage: any = first(get(post, "compose__page"))
          const postImage: any = getImage(post.image)
          return (
            <div key={`post${i}`}>
              <GatsbyImage image={postImage} alt="A dinosaur" />
              <h2>{postPage.title}</h2>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          compose__page {
            title
            slug
            createdAt
            updatedAt
          }
          image {
            gatsbyImageData(width: 320)
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`
