import * as React from "react"
import Brand from "../brand/brand.component"
import "./header.component.scss"

type HeaderProps = {
  isMenuOpen: boolean
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const renderMenu = (
  toggleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isMenuOpen: boolean,
  text: string
):
  | string
  | number
  | boolean
  | {}
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactNodeArray
  | React.ReactPortal
  | null
  | undefined => {
  return (
    <div
      className="header-menu"
      onClick={() => {
        toggleMenuOpen(!isMenuOpen)
      }}
    >
      {text}
    </div>
  )
}

const Header = ({ isMenuOpen, toggleMenuOpen }: HeaderProps) => (
  <header>
    <Brand />
    {renderMenu(toggleMenuOpen, isMenuOpen, "Menu")}
  </header>
)

export default Header
