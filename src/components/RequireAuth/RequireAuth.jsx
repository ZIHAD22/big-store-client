import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../fireBase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, AuthLoading] = useAuthState(auth);
  let location = useLocation();

  if (AuthLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
