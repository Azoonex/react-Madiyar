import { useRoutes } from "react-router-dom"
import routes from "./router"


function App() {
  const route = useRoutes(routes)
  return (
    <>
    {route}
    </>
  )
}

export default App
