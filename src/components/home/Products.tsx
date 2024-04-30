import HeadProduct from "./HeadProduct";
import classes from "../../styles/product.module.css"
import Card from "../Card";
import { navLinkBodyProducts } from "../../constant";

export default function Products() {
  const str = 'abasazoonexdevd'
  const newProducts = [...str]

  return (
    <section className={`${classes.mainsection} `}>
      <HeadProduct />
      <div className={`${classes.container_products} product_grid_system`}>
        {
          newProducts.map((i) => (
            <div>
              <Card key={i + 1} />
            </div>
          ))
        }
        <div className="nav-body_products">
        {
          navLinkBodyProducts.map((i,index) => (
            <div className={classes.body_navlink}>
              <h1><i.Icon style={{ color: index === 0 ? '#8cbd05' : 'initial' }} /></h1>
              <span>{i.label}</span>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}
