import { useRoutes } from "react-router-dom";
import routes from "./router";
import Student from "./test-ts/Student";
import Heading from "./test-ts/Heading";
import Footer from "./test-ts/Footer";


const allStudent = [
  { id: 1, title: "reza" },
  { id: 1, title: "mohamad" },
  { id: 1, title: "abas" },
]

const creating = {
  name: "amirabas",
  age: 22,
  ispending: true
}


function App() {
  let router = useRoutes(routes)
  return (
    <>
      {router}
      {/* react-ts */}
      <Student allStudent={allStudent} status={creating} />
      <Heading>
        createitems
      </Heading>
      <Footer style="" />
    </>
  )
}

export default App
