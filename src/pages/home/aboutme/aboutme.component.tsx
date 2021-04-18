import * as React from "react"
import "./aboutme.component.scss"
type AboutMeProps = {}
const AboutMe: React.FC<AboutMeProps> = () => (
  <section className="aboutme">
    <h1
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="fade"
    >
      <span className="gradient1">About me</span>
    </h1>
    <p
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      I'm a software engineer with <strong>15 years+</strong> of experience.
      Based in <strong>Sydney, AU</strong>.
    </p>

    <p
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      I've worked with a variety of organizations - from start-ups to
      established businesses and government agency in different parts of the
      world. 🌎 I love working with people! 👨‍👩‍👧‍👧 It's just more fun that way.
      Especially when creating products and services that helps businesses solve
      their problems through efficient software development.
    </p>

    <p
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      Just between you and me 😉 this is something a little philosophical, you
      know what keeps me going? The promise of a product that I've worked on
      improving businesses, workflow or even people's quality of life in
      whatever way. 🚀
    </p>

    <p
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      BTW, In my free time I take photos 📸 or play music 🎸🎹.
    </p>
  </section>
)

export default AboutMe
