import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex gap-20 w-screen items-center shadow">
      <span className="ml-20 p-3 border rounded">LOGO</span>
      <ul className="flex justify-between items-center px-20 py-5 w-full">
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
          <NavLink
            to="/login"
            className="font-bold text-gray-800 dark:text-gray-200"
          >
            Login
          </NavLink>
        </li>
      </ul>
      
    </div>
  );
}
