import "./Navbar.css";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { ThemeProps } from "./Navbar.types";
import { toggleTheme } from "./utils/toggleTheme";
import { Link } from "react-router-dom";

const HeaderMobile = ({ theme, setTheme }: ThemeProps) => {
  return (
    <div className="header-mobile flex justify-between items-center p-2">
      <Link to="/" className="font-sofia text-2xl pl-2 color-secondary">
        FootQuiz
      </Link>

      {theme === "light" ? (
        <IoSunnyOutline
          className="text-2xl color-secondary"
          onClick={() => toggleTheme({ theme, setTheme })}
        />
      ) : (
        <IoMoonOutline
          className="text-2xl color-secondary"
          onClick={() => toggleTheme({ theme, setTheme })}
        />
      )}
    </div>
  );
};

export default HeaderMobile;
