import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { first, get } from "lodash"
import * as React from "react"
import AnimatedSlideUpElement from "../../components/animated-slideup-element/animated-slideup-element.component"
import BlogPostCard from "../../components/blog-post-card/blog-post-card.component"

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
      <div className="blog-container">
        <AnimatedSlideUpElement type="div">
          <h1>
            <span className="gradient1">Blog posts</span>
          </h1>
          <h4>Checkout my latest posts 😉👍</h4>
        </AnimatedSlideUpElement>

        <div className="post-container">
          {blogPostsExcerpts.map((p, i) => {
            const post = get(p, "node")
            const postPage: any = first(get(post, "compose__page"))
            const postImage: any = getImage(post.image)
            return (
              <BlogPostCard
                key={`post${i}`}
                slug={postPage.slug}
                date={new Date(postPage.updatedAt).toDateString()}
                title={postPage.title}
                imageObject={postImage}
                imageAlt={post.imageAlt}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  {
    allContentfulBlogPost(
      sort: { order: DESC, fields: compose__page___seo___updatedAt }
    ) {
      edges {
        node {
          compose__page {
            title
            slug
            createdAt
            updatedAt
          }
          imageAlt
          image {
            gatsbyImageData(width: 500)
          }
        }
      }
    }
  }
`
