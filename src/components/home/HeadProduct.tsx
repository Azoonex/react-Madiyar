import classes from "../../styles/product.module.css";
import { IarrowRight } from "../../assets/icons/icons";
import Button from "../Button";
import { titleProdocts } from "../../constant";

export default function HeadProduct() {
  return (
    <nav className={`d-flex-space-bet  ${classes.mainsection_head} mainSection_head`}>
      <div className={classes.gropbutton}>
        {
          titleProdocts.map(i => (
            <button>{i.text}</button>
          ))
        }
      </div>
      <Button text="مشاهد همه" style="btn-outline" Icon={IarrowRight} />
    </nav>
  )
}
