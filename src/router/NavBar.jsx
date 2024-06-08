import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import logo from "../assets/LOGOSTORE.png";

export default function NavBar() {
  const { user, setUser } = useContext(Context);
  return (
    <div className="flex gap-20 w-screen items-center shadow min-h-[80px]">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="h-[80px] px-5 ml-10" />
      </NavLink>
      <ul className="flex justify-between items-center px-20 py-2 w-full">
        <li>
          <NavLink
            to="/"
            className="font-bold text-gray-800 dark:text-gray-200"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="font-bold text-gray-800 dark:text-gray-200"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="font-bold text-gray-800 dark:text-gray-200"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className="font-bold text-gray-800 dark:text-gray-200"
          >
            Articles
          </NavLink>
        </li>
        <li>
          {!user.username ? (
            <NavLink
              to="/login"
              className="font-bold text-gray-800 dark:text-gray-200 border py-3 px-7 bg-[#1a1a1a] rounded-lg hover:border-[#646cff] hover:text-white transition duration-300"
            >
              Login
            </NavLink>
          ) : (
            <button
              className="font-bold text-gray-800 dark:text-gray-200"
              onClick={() => setUser({})}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
