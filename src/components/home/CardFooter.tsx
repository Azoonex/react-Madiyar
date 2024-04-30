import { image1, image2 } from "../../assets"
import { IarrowRight } from "../../assets/icons/icons"
import { cardFooter } from "../../constant"
import classes from "../../styles/cardfooter.module.css"
import Button from "../Button"
import Carousel from "../carousel/Caroucel"
import BtnCard from "./BtnCard"

export default function CardFooter() {
  const images = [
    image1,
    image2,
    image1
  ];
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
        <Button text="مشاهد همه" style="btn-full__bg" Icon={IarrowRight} />
      </div>
      <div>
        <Carousel images={images} />
      </div>
    </section>
  )
}
