import { Home } from "./pages"
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient()

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {router}
      </QueryClientProvider>
    </>
  )
}

export default App
