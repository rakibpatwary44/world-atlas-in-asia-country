import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const handelMobileViewShow = () => {};
  return (
    <header className="bg-base-100 shadow-sm ">
      <Wrapper>
        <div className="navbar  ">
          <div className="flex-1">
            <NavLink className="btn btn-ghost text-xl" to="/">
              WorldAtlas
            </NavLink>
          </div>
          <div className="flex gap-2">
            <nav className="hidden md:block">
              <ul className="flex flex-row gap-5">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold " : ""
                    }
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/country"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : ""
                    }
                  >
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-red-500 font-bold" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          {/* movile view */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-50 absolute left-1/2 -translate-x-1/2  mt-3 w-70 p-2  shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold " : ""
                  }
                >
                  {" "}
                  About{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : ""
                  }
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
