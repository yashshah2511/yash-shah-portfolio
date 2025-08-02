import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 shadow-md transition-all duration-300 ${darkMode ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-r from-white via-indigo-100 to-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-text">
          Yash Shah
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`relative group text-lg font-semibold transition ${
                location.pathname === path
                  ? "text-indigo-600 dark:text-pink-400"
                  : "hover:text-indigo-600 dark:hover:text-pink-400"
              }`}
            >
              {name}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 dark:bg-pink-400 transition-all duration-300 ${location.pathname === path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition duration-500 transform hover:rotate-180 hover:scale-110
              ${darkMode
                ? "bg-gradient-to-br from-pink-500 to-indigo-600 text-white"
                : "bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
              }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 mt-2" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {links.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold transition ${
                location.pathname === path
                  ? "text-indigo-600 dark:text-pink-400"
                  : "hover:text-indigo-600 dark:hover:text-pink-400"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`mt-2 px-4 py-1 rounded-full font-semibold shadow transition duration-500 ${
              darkMode
                ? "bg-gradient-to-r from-pink-600 to-indigo-600 text-white hover:brightness-110"
                : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:brightness-110"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
