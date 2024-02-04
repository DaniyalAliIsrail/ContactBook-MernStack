import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthenticateRoute = () => {
  return !localStorage.getItem("token") ? <Outlet/> : (<Navigate to={"/dashboard"} /> );
}
export default AuthenticateRoute;