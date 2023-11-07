import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddBlog from "../Shared/NavBar/AddBlog/AddBlog";
import ErrorPage from "../components/ErrorPAge/ErrorPage";
import AllBlogs from "../components/AllBlogs/AllBlogs";
import FeaturedBlog from "../components/FeaturedBlog/FeaturedBlog";
import WishList from "../components/WishList/WishList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/addBlog',
                element:<AddBlog></AddBlog>
            },
            {
                path:'/allBlog',
                element:<AllBlogs></AllBlogs>
            },
            {
                path:'/featuredBlog',
                element:<FeaturedBlog></FeaturedBlog>
            },
            {
                path:'/wishList',
                element:<WishList></WishList>
            }
        ]
    },
]);

export default router;