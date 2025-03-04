import React from "react";
import { Navigate } from "react-router-dom";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import { isAuthenticated } from "~/pages/login-page/auth-service";

type Props = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to={pagesRoutes.login} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
