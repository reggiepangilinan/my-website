import * as React from "react"
import "./animated-slideup-div.component.scss"
type AnimatedSlideUpDivProps = {}
const AnimatedSlideUpDiv: React.FC<AnimatedSlideUpDivProps> = ({
  children,
}) => (
  <div
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-delay="50"
    data-sal-easing="fade"
  >
    {children}
  </div>
)

export default AnimatedSlideUpDiv
