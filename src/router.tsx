import {
    HomePage, PostHeroPage, ProductHeroPage
} from "./pages"


let routes = [
    { path: "/", element: <HomePage /> },
    { path: '/post', element: <PostHeroPage /> },
    {
        path: '/product', element: <ProductHeroPage />
    }
]

export default routes