import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";
import FooNav from "../Shared/FooNav/FooNav";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooNav></FooNav>
        </div>
    );
};

export default MainLayout;