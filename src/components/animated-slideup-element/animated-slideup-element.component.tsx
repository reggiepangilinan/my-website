import * as React from "react"

type AnimatedSlideUpElementProps = {
  type: "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
}
const AnimatedSlideUpElement: React.FC<AnimatedSlideUpElementProps> = ({
  children,
  type,
  className,
}) => {
  const CustomTag = type

  return (
    <CustomTag
      className={className}
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-delay="70"
      data-sal-easing="fade"
    >
      {children}
    </CustomTag>
  )
}
export default AnimatedSlideUpElement
