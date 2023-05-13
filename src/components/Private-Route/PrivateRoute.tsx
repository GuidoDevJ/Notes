import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const PrivateRoute = ({ children }: any) => {
  const authToken = useSelector((state: any) => state.auth.authTokenState);
  const token = authToken?.token;
  console.log("token",token)

  if (!token) {
    return <Navigate to={"/"} />;
  }
  return children ? children : <Outlet />;
};

export { PrivateRoute };
