import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div className="navbar-mobile flex justify-around py-1">
      <Link to="/" className="flex flex-col items-center">
        <IoHomeOutline className="text-2xl" />
        <p className="text-base">Home</p>
      </Link>
      <Link to="/login" className="flex flex-col items-center">
        <IoPersonOutline className="text-2xl" />
        <p className="text-base">Account</p>
      </Link>
    </div>
  );
};

export default NavbarMobile;
