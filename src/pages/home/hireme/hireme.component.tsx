import * as React from "react"
import "./hireme.component.scss"
type HireMeProps = {}
const HireMe: React.FC<HireMeProps> = () => (
  <section className="hireme">
    <h1
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      <span className="gradient1">Let’s do</span>
      <span className="gradient1"> amazing work</span>
      <span className="gradient1"> together</span>
      <span role="img" className="wave">
        🤝
      </span>
    </h1>

    <h3
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      Send me an email 📤
    </h3>
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
