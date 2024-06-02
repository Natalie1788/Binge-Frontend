import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Assuming you're using React Icons
import Foodr from "../components/Foodr.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-500 dark:bg-gray-200 sm:hidden md:block sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Foodr} className="h-8" alt="logo" />
          </a>
        </Link>
        <div className="relative">
          {/* Menu toggle button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-white border-t border-gray-200 dark:bg-green-900">
          {/* Search bar inside menu bar */}
          <div className="relative p-4">
           
          </div>
          {/* End of search bar */}
          <div className="flex flex-col items-center justify-center pt-4 pb-2">
            <Link to="../Cookbook">
              <a href="#" className="block py-2 px-4 text-white hover:bg-blue-900">
                Min Kokbok
              </a>
            </Link>
            <a href="#" className="block py-2 px-4 text-white hover:bg-blue-900">
              Få Inspiration
            </a>
            
          </div>
          <div className="flex items-center justify-center pt-4 pb-2">
            <Link to="../SignIn">
              <button
                type="button"
                className="py-2 px-6 text-sm text-white bg-blue-900 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={toggleMenu}
              >
                Logga In
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
