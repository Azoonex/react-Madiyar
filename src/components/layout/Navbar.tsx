import { iconsheader, navLink } from "../../constant"
import classes from "../../styles/navbar.module.css"
import { logo } from "../../assets"
import { mapingUi, useOpen } from "../../helper"
import { BiMenu, BiSearch } from "react-icons/bi"
import MenuMobile from "../home/MenuMobile"

export default function Navbar() {

  const mapingnavlink = mapingUi(navLink)
  const mapingicons = mapingUi(iconsheader)
  const [isOpen, toggleMenu] = useOpen();

  console.log(isOpen)


  return (
    <div className={`${classes.nav}`}>
      <div className={` d-flex-space-bet nav_main_md`}>
        <img src={logo} alt="img" />
        <ul className={`d-flex-c gap-md ul_nav_link_md ${classes.btnEffect}`}>
          {mapingnavlink}
        </ul>
        <ul className={`d-flex-c gap-md ul_nav_link_md`}>
          {mapingicons}
        </ul>
        <div className="content-menu-nav d-flex-c gap-md">
          <button className="btn_menu" onClick={toggleMenu}>
            <BiMenu className="i-md" />
          </button>
          <BiSearch className="i-md" />
          {
            isOpen && <MenuMobile />
          }
        </div>
      </div>
    </div>
  )
}

