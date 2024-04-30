import { BiArrowFromRight } from "react-icons/bi";
import classes from "../../styles/product.module.css";

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
        <span><BiArrowFromRight className="i-xs" /></span>
      </button>
    </nav>
  )
}
