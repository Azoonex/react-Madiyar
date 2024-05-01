import { CardFooter, Navbar, Products } from "../components";


export default function Home() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <Products />
      <footer>
        <CardFooter />
      </footer>
    </main>
  )
}
