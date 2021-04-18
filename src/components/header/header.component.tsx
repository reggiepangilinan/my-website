import * as React from "react"
import Brand from "../brand/brand.component"
import "./header.component.scss"

type HeaderProps = {
  isMenuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const renderMenu = (
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
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
        setMenuOpen(!isMenuOpen)
      }}
    >
      {text}
    </div>
  )
}

const Header = ({ isMenuOpen, setMenuOpen }: HeaderProps) => (
  <header>
    <Brand />
    {isMenuOpen
      ? renderMenu(setMenuOpen, isMenuOpen, "Close")
      : renderMenu(setMenuOpen, isMenuOpen, "Menu")}
  </header>
)

export default Header
