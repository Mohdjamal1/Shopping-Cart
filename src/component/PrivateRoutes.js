import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoutes = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!user || error) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoutes;
