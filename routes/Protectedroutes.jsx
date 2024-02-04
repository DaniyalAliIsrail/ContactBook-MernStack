import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protectedroutes = () => {

    return localStorage.getItem("token") ? <Outlet /> : <Navigate to={"/"} />;
    
}

export default Protectedroutes;