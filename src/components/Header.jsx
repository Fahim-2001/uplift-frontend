import { Button, Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navStyle =
    "block lg:inline rounded-md px-5 py-1 lg:mx-2 hover:bg-gray-200";

  const user = JSON.parse(localStorage.getItem("user"));
  
  const navLinks = (
    <div className="px-5 lg:flex">
      <Link className={navStyle}>Programs</Link>
      <Link className={navStyle}>Hire From Uplift</Link>
      <Link className={navStyle}>Showcase</Link>
      <Link className={navStyle}>Blog</Link>
      {!user && (
        <Link to="/signin" className={navStyle}>
          Sign In
        </Link>
      )}
      {user && <Link className={navStyle}>Dashboard</Link>}

      {!user && (
        <Link className="block lg:inline bg-orange-500 hover:bg-orange-600 rounded-md px-5 py-1 lg:mx-2 text-white">
          Book a Free Session
        </Link>
      )}
      {user && (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block lg:inline ml-4 lg:ml-0 py-1"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6201 12.7941C21.6351 12.7791 21.6497 12.7637 21.6637 12.748C21.87 12.5648 22 12.2976 22 12C22 11.7024 21.87 11.4352 21.6637 11.252C21.6497 11.2363 21.6351 11.2209 21.6201 11.2059L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L18.5858 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H18.5858L17.2929 14.2929Z"
              fill="#FF6600"
            ></path>{" "}
            <path
              d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H14.5C15.8807 22 17 20.8807 17 19.5V16.7326C16.8519 16.647 16.7125 16.5409 16.5858 16.4142C15.9314 15.7598 15.8253 14.7649 16.2674 14H13C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10H16.2674C15.8253 9.23514 15.9314 8.24015 16.5858 7.58579C16.7125 7.4591 16.8519 7.35296 17 7.26738V4.5C17 3.11929 15.8807 2 14.5 2H5Z"
              fill="#FF6600"
            ></path>{" "}
          </g>
        </svg>
      )}
    </div>
  );

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
