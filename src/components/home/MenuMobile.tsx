import { Ishop } from "../../assets/icons/icons"
import { navLink } from "../../constant"
import { mapingUi } from "../../helper"

export default function MenuMobile() {

    const mapingnavlink = mapingUi(navLink) 


  return (
    <ul  style={{width : "200px",alignContent:"flex-start",position: "absolute",right:-15,top: 50,display: "flex",flexDirection:"column",gap: 30,background:"#fce2",justifyContent: "flex-end",alignContent: "flex-end",padding:"10px"}}>
        {mapingnavlink}
        <li style={{display:"flex"}}>
        <Ishop className="i-xs" />
        <strong style={{marginInline:3}}>فروشنده شوید!</strong>
        </li>
    </ul>
  )
}
