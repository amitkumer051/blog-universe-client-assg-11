import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddBlog from "../Shared/NavBar/AddBlog/AddBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
            }
        ]
    },
]);

export default router;