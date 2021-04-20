import * as React from "react"
import AnimatedSlideUpElement from "../../../components/animated-slideup-element/animated-slideup-element.component"
import "./aboutme.component.scss"
type AboutMeProps = {}
const AboutMe: React.FC<AboutMeProps> = () => (
  <section className="aboutme">
    <AnimatedSlideUpElement type="h1">
      <span className="gradient1">About me</span>
    </AnimatedSlideUpElement>

    <AnimatedSlideUpElement type="p">
      I'm a <strong>software engineer</strong> with <strong>15+ years</strong>{" "}
      of experience currently based in <strong>Sydney, Australia</strong>.
    </AnimatedSlideUpElement>

    <AnimatedSlideUpElement type="p">
      I've worked with a variety of organizations - from start-ups to
      established businesses and government agency in different parts of the
      world. I love working with people! It's just more fun that way. Especially
      when creating products and services that helps businesses solve their
      problems through efficient software development.
    </AnimatedSlideUpElement>

    <AnimatedSlideUpElement type="p">
      Just between you and me 😉 this is something a little philosophical, you
      know what keeps me going? The promise of a product that I've worked on
      improving businesses, workflow or even people's quality of life in
      whatever way. 🚀
    </AnimatedSlideUpElement>

    <AnimatedSlideUpElement type="p">
      BTW, In my free time I take photos 📸 or play music 🎸🎹.
    </AnimatedSlideUpElement>
  </section>
)

export default AboutMe
