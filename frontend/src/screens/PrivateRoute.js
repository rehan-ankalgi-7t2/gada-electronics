import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
