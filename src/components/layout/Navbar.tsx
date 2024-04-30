import { iconsheader, navLink } from "../../constant"
import classes from "../../styles/navbar.module.css"
import { mapingUi } from "../../hook/maping"
import { logo } from "../../assets"



export default function Navbar() {

  const mapingnavlink = mapingUi(navLink)
  const mapingicons = mapingUi(iconsheader)
  iconsheader

  return (
    <div className={`${classes.nav} `}>
      <div className={` d-flex-space-bet`}>
        <ul className={`d-flex-c gap-md`}>
          {mapingicons}
        </ul>
        <ul className={`d-flex-c gap-md`}>
          {mapingnavlink}
        </ul>
        <img src={logo} alt="img" />
      </div>
    </div>
  )
}
