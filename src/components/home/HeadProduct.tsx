import classes from "../../styles/product.module.css";
import { IarrowRight } from "../../assets/icons/icons";
import Button from "../Button";

export default function HeadProduct() {
  return (
    <nav className={`d-flex-space-bet  ${classes.mainsection_head} mainSection_head`}>
      <div className={classes.gropbutton}>
        <button>
          خرید
        </button>
        <button>
          خرید
        </button>
        <button>
          خرید
        </button>
      </div>
      <Button text="مشاهد همه" style="btn-outline" Icon={IarrowRight} />
    </nav>
  )
}
