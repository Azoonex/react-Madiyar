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
          newProducts.map((i, index) => (
            <div key={index}>
              <Card key={index + 1} />
              
            </div>
          ))
        }
        <div className="nav-body_products">df</div>
      </div>
    </section>
  )
}
