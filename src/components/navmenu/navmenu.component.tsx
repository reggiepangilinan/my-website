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
    <div>
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
    </div>
    <footer>
      © {new Date().getFullYear()}{" "}
      <a href="https://www.reggiepangilinan.com">Reggie Pangilinan</a>
    </footer>
  </nav>
)

export default NavMenu
