import {
    HomePage
} from "./pages"
import Login from "./reackHook/Login"


let routes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> }
]

export default routes