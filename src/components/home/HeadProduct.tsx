import classes from "../../styles/product.module.css";
import { IarrowRight } from "../../assets/icons/icons";

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
      <button className={classes.single}>مشاهده همه
        <span><IarrowRight className="i-xs" /></span>
      </button>
    </nav>
  )
}
