import React from "react";
import Wrapper from "../Wrapper";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-base-100 shadow-sm ">
      <Wrapper>
        <div className="navbar ">
          <div className="flex-1">
            <NavLink className="btn btn-ghost text-xl" to="/">
              WorldAtlas
            </NavLink>
          </div>
        <div className="flex gap-2">
            <nav className="">
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
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
