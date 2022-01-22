import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
const PrivatRoute = ({ children }) => {
  const { user } = useUserContext();
  return user ? children : <Navigate to="/checkout" />;
};

export default PrivatRoute;
