import { Button, Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navStyle = "block lg:inline rounded-md px-5 py-1 lg:mx-2 hover:bg-gray-200"
  const navLinks = (
    <div className="px-5 lg:px-0">
      <Link className={navStyle}>
        Programs
      </Link>
      <Link className={navStyle}>
        Hire From Uplift
      </Link>
      <Link className={navStyle}>
        Showcase
      </Link>
      <Link className={navStyle}>
        Blog
      </Link>
      <Link to="/signin" className={navStyle}>
        Sign In
      </Link>
      <Link className="block lg:inline bg-orange-500 hover:bg-orange-600 rounded-md px-5 py-1 lg:mx-2 text-white">
        Book a Free Session
      </Link>
    </div>
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="flex justify-between items-center mt-7 mb-10">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="hidden lg:flex gap-5">{navLinks}</div>
      <div className="lg:hidden">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Menu / Menu_Alt_01">
                {" "}
                <path
                  id="Vector"
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {navLinks}
        </Menu>
      </div>
    </section>
  );
};

export default Header;
