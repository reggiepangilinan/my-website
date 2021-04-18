import * as React from "react"
import { Link } from "gatsby"
import "./navmenu.component.scss"
type NavMenuProps = {
  isOpen: boolean
}
const NavMenu: React.FC<NavMenuProps> = ({ isOpen }: NavMenuProps) => (
  <nav className={isOpen ? "navmenu open" : "navmenu"}>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavMenu
