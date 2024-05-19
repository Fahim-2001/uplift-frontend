import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const LoggedInUsersRestriction = ({ children }) => {
  const user = useContext(AuthContext);
  const location = useLocation();

  if (user && user?.id != null && user?.email !== null && user?.token != null) {
    return <Navigate to={location.state?.from || "/"} />;
  }
  return <div>{children}</div>;
};

export default LoggedInUsersRestriction;
