import "./Navbar.css";
import MediaQuery from "react-responsive";
import NavbarDesktop from "./NavbarDesktop";
import HeaderMobile from "./HeaderMobile";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initializeTheme = () => {
      const currentTheme = localStorage?.getItem("theme");

      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        setTheme(currentTheme);
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
    };
    initializeTheme();
  }, [theme]);
  return (
    <div>
      <MediaQuery maxWidth={768}>
        <HeaderMobile theme={theme} setTheme={setTheme} />
        <NavbarMobile />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <NavbarDesktop theme={theme} setTheme={setTheme} />
      </MediaQuery>
    </div>
  );
};

export default Navbar;
