import * as React from "react"
import { Link } from "gatsby"
import "./navmenu.component.scss"
type NavMenuProps = {
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}
const NavMenu: React.FC<NavMenuProps> = ({
  isOpen,
  toggleMenuOpen,
}: NavMenuProps) => (
  <nav className={isOpen ? "navmenu open" : "navmenu"}>
    <div
      className="close-menu"
      onClick={() => {
        toggleMenuOpen(!isOpen)
      }}
    >
      Close
    </div>

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
