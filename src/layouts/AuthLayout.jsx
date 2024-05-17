import Logo from "../assets/images/main_logo.png";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Link to={"/"} className="flex justify-center my-5">
        <img src={Logo} className="" alt="" />
      </Link>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
