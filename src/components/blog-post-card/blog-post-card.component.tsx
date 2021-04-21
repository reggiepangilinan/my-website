import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import AnimatedSlideUpElement from "../animated-slideup-element/animated-slideup-element.component"
import "./blog-post-card.component.scss"

type BlogPostCardProps = {
  slug: string
  date: string
  title: string
  imageObject: any //Gatsby image object
  imageAlt: string
}

const BlogPostCard = ({
  slug,
  date,
  title,
  imageObject,
  imageAlt,
}: BlogPostCardProps) => (
  <Link to={`${slug}`}>
    <AnimatedSlideUpElement type="div" className="blog-post-card">
      <GatsbyImage
        image={imageObject}
        alt={imageAlt}
        loading="eager"
        className="image-wrapper"
        imgClassName="image"
      />
      <div className="content">
        <div className="date">{date}</div>
        <h2 className="title">{title}</h2>
      </div>
    </AnimatedSlideUpElement>
  </Link>
)

export default BlogPostCard
