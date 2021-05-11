import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { first, get, isEmpty, join } from "lodash"
import * as React from "react"
import AnimatedSlideUpElement from "../components/animated-slideup-element/animated-slideup-element.component"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.template.scss"
import GithubGist from "../components/github-gist/github-gist.component"


type BlogPostProps = {
  data: any
}

const Bold = ({ children }: any) => {
  return <span className="bold">{children}</span>
}

const Text = ({ children }: any) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (text: any) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      )
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      // console.log(node);
      // console.log(children);
      return (<Text>{children}</Text>)},
    [INLINES.HYPERLINK]: (node: any) => {
      const isGithubGists = node.data.uri.indexOf('gist.github.com') >= 0;
      if(isGithubGists) return <GithubGist link={node.data.uri}/>
      return <a href={node.data.uri} target="_blank">{node.content[0].value}</a>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const assetImage: any = getImage(node.data.target)
      const assetImageAlt: string = node.data.target.description
      return (
        <div className="image-component">
          <GatsbyImage
            image={assetImage}
            alt={assetImageAlt}
            loading="eager"
            className="asset-image-wrapper"
            imgClassName="asset-image"
          />
          <div className="image-description">{assetImageAlt}</div>
        </div>
      )
    },
  },
}

const Blog: React.FC<BlogPostProps> = ({ data }: BlogPostProps) => {
  const post = get(data, "contentfulBlogPost")
  const postDate = new Date(post.createdAt).toDateString()
  const postImage: any = getImage(post.image)
  const postKeywords = join(post.keywords,", ")
  const postPublicImage = post.image.fixed.src

  return (
    <Layout>
      <SEO title={post.title} description={post.subTitle} meta={[
        {
          name: 'keywords',
          content: postKeywords
        },
        {
          name: 'twitter:image',
          content: postPublicImage
        },
        {
          name: 'og:image',
          content: postPublicImage
        }
      ]}/>
      <article className="blog-post">
        <AnimatedSlideUpElement type="div" className="title-group">
          <div className="date">{postDate}</div>
          <h1 className="title gradient1">{post.title}</h1>
          <h3 className="sub-title">{post.subTitle}</h3>
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
      title
      subTitle
      slug
      keywords
      createdAt
      updatedAt
      imageAlt
      image {
        gatsbyImageData(width: 900)
        fixed(width: 900) {
          src
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            description
            __typename
            gatsbyImageData(formats: NO_CHANGE)
          }
        }
      }
    }
  }
`
