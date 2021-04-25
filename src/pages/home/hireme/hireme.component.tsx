import * as React from "react"
import AnimatedSlideUpElement from "../../../components/animated-slideup-element/animated-slideup-element.component"
import "./hireme.component.scss"
type HireMeProps = {}
const HireMe: React.FC<HireMeProps> = () => (
  <section className="hireme">
    <AnimatedSlideUpElement type="h1">
      <span className="gradient1">Let’s do</span>
      <span className="gradient1"> amazing</span>
      <span className="gradient1"> things</span>
      <span className="gradient1"> together! </span>
      <span role="img" className="wave">
        🤝
      </span>
    </AnimatedSlideUpElement>

    <AnimatedSlideUpElement type="h3">
      Send me an email 📤
    </AnimatedSlideUpElement>
    <a
      href="mailto:reggiepangilinan@gmail.com?subject=Let's%20work%20together%20mate!"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      reggiepangilinan@gmail.com
    </a>
  </section>
)

export default HireMe
