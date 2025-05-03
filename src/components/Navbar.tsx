// components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 ${
        !isHome && "shadow"
      }
      ${isHome ? "bg-indigo-600 text-white" : "bg-white text-gray-800"}`}
    >
      <Link to={"/"} className="flex items-end w-6 h-6">
        {!isHome && <img src={logo} alt="logo" />}
        <span
          className={`font-protest ${
            isHome ? "text-white" : "text-black"
          } ml-2`}
        >
          CityHelp
        </span>
      </Link>

      <div className="flex gap-6">
        <div
          className={`hover:text-orange-300 ${
            isHome ? "text-white" : "text-gray-700"
          }`}
        >
          Language
        </div>
        <Link
          to="/help"
          className={`font-semibold hover:underline ${
            isHome ? "text-orange-300" : "text-orange-500"
          }`}
        >
          ● Support
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
