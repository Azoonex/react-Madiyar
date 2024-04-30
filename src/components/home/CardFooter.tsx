import { image1 } from "../../assets"
import { IarrowRight } from "../../assets/icons/icons"
import { cardFooter } from "../../constant"
import classes from "../../styles/cardfooter.module.css"
import BtnCard from "./BtnCard"

export default function CardFooter() {
  return (
    <section className={`${classes.container} cardfooter_main`}>
        <div className="content_caption">
              <div className={classes.cardfooter_content}>
                {
                    cardFooter.map(i => (
                        <BtnCard key={i.id} {...i} />
                    ))
                }
            </div>
              <button className={classes.single}>مشاهده همه
                  <span><IarrowRight className="i-xs" /></span>
              </button>
        </div>
        <img src={image1} alt="img" width={100} />
    </section>
  )
}
