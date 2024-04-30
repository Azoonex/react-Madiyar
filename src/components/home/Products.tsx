import HeadProduct from "./HeadProduct";
import classes from "../../styles/product.module.css"
import Card from "../Card";


export default function Products() {
  const str = 'abasazoonexdevd'
  const newProducts = [...str]
  
  return (
    <section className={`${classes.mainsection} `}>
        <HeadProduct />
      <div className={`${classes.container_products} product_grid_system`}>
       {
        newProducts.map((o,i) =>(
          <Card key={i} />
        ))
       }
      </div>
    </section>
  )
}
