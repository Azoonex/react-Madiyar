import HeadProduct from "./HeadProduct";
import classes from "../../styles/product.module.css"
import Card from "../Card";


export default function Products() {
  return (
    <section className={classes.mainsection}>
        <HeadProduct />
      <Card />
    </section>
  )
}
