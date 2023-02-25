import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthToken } from "../../redux/auth/authSlice";

function PrivateRoute() {
  const authToken = useSelector(selectAuthToken);

  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
