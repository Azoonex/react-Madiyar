import { useRoutes } from "react-router-dom";
import routes from "./router";
import Student from "./test-ts/Student";
import Heading from "./test-ts/Heading";
import Input from "./test-ts/Input";
import Button from "./test-ts/Button";


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
      <Input handchange={(evnet) => console.log(evnet)} value="" />
      <Button />
    </>
  )
}

export default App
