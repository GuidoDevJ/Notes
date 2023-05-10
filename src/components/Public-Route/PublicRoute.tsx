import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const PublicRoute = ({ children }: any) => {
  const authToken = useSelector((state: any) => state.auth.authTokenState);
  const token = authToken?.token;
  if (token) {
    return <Navigate to={"/notes"} />;
  }
  return children ? children : <Outlet />;
};

export { PublicRoute };
