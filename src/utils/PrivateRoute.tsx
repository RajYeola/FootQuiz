import React from "react";
import { Navigate, Route } from "react-router";
import { useAuth } from "../context/authContext/authContext";
import { AuthContextProps } from "../context/authContext/authContext.types";

type PrivateRouteProps = {
  path: string;
  element: React.ReactElement;
};

const PrivateRoute = ({ path, element }: PrivateRouteProps) => {
  const { isLoggedIn } = useAuth() as AuthContextProps;
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};

export default PrivateRoute;
