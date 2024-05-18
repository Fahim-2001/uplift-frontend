import { Outlet } from "react-router-dom";
import DashNav from "../components/Dashboard/DashNav";

const DashboardLayout = () => {
  return (
    <section>
      <DashNav />
      <div className="my-5">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
