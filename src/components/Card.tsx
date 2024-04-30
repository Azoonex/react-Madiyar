import { imageproduct } from "../assets"
import { Iadd, Ishop } from "../assets/icons/icons"
import { mapingUi } from "../helper"
import classes from "../styles/card.module.css"

export default function Card() {
  const titleCard = [
    {icon: Ishop},
    {icon: Ishop},
    {icon: Ishop},
  ];
  const iconsui = mapingUi(titleCard);
  return (
    <div className={classes.container}>
      <ul>
        {iconsui}
      </ul>
      <img src={imageproduct} alt="iamge" width={150} style={{display:"block",marginInline :"auto",objectFit:"cover"}} />
      <h4>عنوان محصول عنوان محصول </h4>
      <h5>عنوان محصول</h5>

      <section className={` ${classes.bodytitle}`}>
        <h4>5.6</h4>
        <button className="d-flex-c">
          <Ishop />
          مهرا شاپ
        </button>
      </section>
      
      <section className="d-flex-space-bet">
        <button className={classes.iconad}><Iadd /></button>
        <div className="">
          <h4 style={{fontWeight:"lighter",textDecorationLine :"line-through",}}>460.000</h4>
          <h3 style={{ color:"#a3c348",marginTop: "7px"}}>430.000</h3>
        </div>
      </section>


    </div>
  )
}
