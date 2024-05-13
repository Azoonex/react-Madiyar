import { Home } from "./pages"
import { useRoutes } from "react-router-dom";
import routes from "./router";


function App() {
  let router = useRoutes(routes)
  return (
    <>
      {router}
    </>
  )
}

export default App
