import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/main_logo.png";

const DashNav = () => {
  const user = useContext(AuthContext);
  const [tab, setTab] = useState();

  useEffect(() => {
    setTab(localStorage.getItem("tab-name"));
  }, [tab]);

  let role;
  if (user?.roleId == 1) role = "Admin";
  else if (user?.roleId == 2) role = "Moderator";
  else if (user?.roleId == 3) role = "Instructor";
  else if (user?.roleId == 4) role = "Employer";
  else if (user?.roleId == 5) role = "Student";

  const dashLinks = [
    { to: "/dashboard", title: "Analytics" },
    { to: "/dashboard/users", title: "Users" },
    { to: "/dashboard/instructors", title: "Instructors" },
    { to: "/dashboard/employers", title: "Employers" },
    { to: "/dashboard/students", title: "Students" },
    { to: "/dashboard/programs", title: "Programs" },
    { to: "/dashboard/jobs", title: "Jobs" },
    { to: "/dashboard/profile-settings", title: "Profile" },
  ];

  const borderStyleForInactiveTabs =
    "border border-b-primary border-t-white border-r-white border-l-white";
  return (
    <section>
      <div className="flex justify-between py-5">
        <Link to={"/"}>
          <img src={Logo} className="h-10" />
        </Link>
        <p className="text-xl text-center">
          Welcome{" "}
          <span className="text-primary font-semibold">{user?.lastName}</span>,{" "}
          {role} of this system.
        </p>
      </div>
      <nav className="flex">
        {dashLinks.map((link, i) => (
          <Link
            className={
              tab === link?.title
                ? "text-center p-primary flex-1 bg-primary text-white border border-b-white rounded-t-md"
                : `text-center p-primary flex-1 bg-white text-primary ${borderStyleForInactiveTabs} `
            }
            key={i}
            to={link?.to}
            onClick={() => setTab(localStorage.setItem("tab-name", link.title))}
          >
            {link?.title}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default DashNav;
