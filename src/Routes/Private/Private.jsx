/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location =useLocation();

    if(loading){
        return  <div className="mx-auto text-center"><span className="loading mx-auto loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Private;