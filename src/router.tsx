import {
    HomePage
} from "./pages"
import Login from "./reackHook/Login"
import Counter from "./test-ts/Counter"


let routes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    {path: "/counter", element: <Counter />}
]

export default routes