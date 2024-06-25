import {
    HomePage
} from "./pages"
import Login from "./reackHook/Login"


export let routes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
]

export default routes