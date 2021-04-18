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

        <li>
          <a
            href="https://www.linkedin.com/in/reggiepangilinan/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
    <footer>
      <a href="https://www.reggiepangilinan.com">reggiepangilinan.com</a> ©{" "}
      {new Date().getFullYear()}
    </footer>
  </nav>
)

export default NavMenu
