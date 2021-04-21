import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { first, get } from "lodash"
import * as React from "react"
import AnimatedSlideUpElement from "../components/animated-slideup-element/animated-slideup-element.component"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blog-post.template.scss"

type BlogPostProps = {
  data: any
}

const Bold = ({ children }: any) => {
  return <span className="bold">{children}</span>
}
const Text = ({ children }: any) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const Blog: React.FC<BlogPostProps> = ({ data }: BlogPostProps) => {
  const post = get(data, "contentfulBlogPost")
  const postPage: any = first(get(post, "compose__page"))
  const postDate = new Date(postPage.updatedAt).toDateString()
  const postImage: any = getImage(post.image)
  return (
    <Layout>
      <SEO title="Blog" />
      <article className="blog-post">
        <AnimatedSlideUpElement type="div" className="title-group">
          <div className="date">{postDate}</div>
          <h1 className="title gradient1">{postPage.title}</h1>
          <p className="sub-title">This should really be a good subtitle.</p>
        </AnimatedSlideUpElement>
        <GatsbyImage
          image={postImage}
          alt={post.imageAlt}
          loading="eager"
          className="hero-image-wrapper"
          imgClassName="hero-image"
        />

        <div className="content">
          {post.body && renderRichText(post.body, options)}
        </div>
      </article>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GetBlogPostById($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      compose__page {
        title
        slug
        createdAt
        updatedAt
      }
      imageAlt
      image {
        gatsbyImageData(width: 1600)
      }
      body {
        raw
      }
    }
  }
`
