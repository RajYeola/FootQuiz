import React from "react";
import {
  IoFootball,
  IoPersonOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { ThemeProps } from "./Navbar.types";
import { toggleTheme } from "./utils/toggleTheme";

const NavbarDesktop = ({ theme, setTheme }: ThemeProps) => {
  return (
    <div className="navbar-desktop">
      <nav className="flex flex-row p-3 px-12 justify-between">
        <Link to="/" className="flex flex-row items-center color-secondary">
          <IoFootball
            style={{ fontSize: "2.5rem" }}
            className="cursor-pointer"
          />
          <h1
            style={{ fontSize: "2rem" }}
            className="font-sofia pl-3 pt-1 cursor-pointer"
          >
            FootQuiz
          </h1>
        </Link>
        <div className="flex flex-row">
          <div className="mr-5 cursor-pointer color-secondary">
            {theme === "light" ? (
              <IoSunnyOutline
                className="text-3xl"
                onClick={() => toggleTheme({ theme, setTheme })}
              />
            ) : (
              <IoMoonOutline
                className="text-3xl"
                onClick={() => toggleTheme({ theme, setTheme })}
              />
            )}
          </div>
          <Link
            to="/login"
            className="flex flex-col items-center cursor-pointer"
          >
            <IoPersonOutline className="text-3xl" />
            <p>Profile</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
