import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "../provider/PrivateRouter";
import Loading from "../pages/Loading";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayouts></HomeLayouts>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },

                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=> fetch('/news.json'),
                    hydrateFallbackElement : <Loading></Loading>
                }
            ]
        },

        {
            path: '/about',
            element: <h2>Let's Talk About</h2>

        },

        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>
                }
            ]
        },

        {
            path: '/news-details/:id',
            element: (
                <PrivateRouter>
                    <NewsDetails></NewsDetails>
                </PrivateRouter>
            ),
            loader: ()=> fetch('/news.json'),
            hydrateFallbackElement : <Loading></Loading>
        },

        {
            path: '/career',
            element: <h2>News Layout</h2>
        },

        {
            path: '/*',
            element: <h2>Error Page</h2>
        }
    ]
)


export default router;