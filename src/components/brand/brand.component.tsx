import * as React from "react"
import { Link } from "gatsby"
import "./brand.component.scss"
type BrandProps = {
  name?: string
  title?: string
}
const Brand: React.FC<BrandProps> = ({
  name = "Reggie Pangilinan",
  title = "Software Engineer",
}: BrandProps) => (
  <div className="brand">
    <h1>
      <Link to="/">{name}</Link>
    </h1>
    <h2>
      <span className="gradient1">{title}</span>
    </h2>
  </div>
)

export default Brand
