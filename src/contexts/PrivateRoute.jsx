import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);
  const location = useLocation();

  if (user && user.id != null && user.token != null) {
    return children;
  }
  return (
    <Navigate to="/auth/signin" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
