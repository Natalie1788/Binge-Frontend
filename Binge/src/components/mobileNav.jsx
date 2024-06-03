import { FaUser, FaArrowsAltH, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const MobileNav = () => {
  return (
    <nav className="bg-white p-5 border-t border-solid border-black justify-around w-full absolute bottom-0 sm:flex md:hidden z-50">
      <div className="flex flex-col items-center">
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>
          <FaUser size={30} className="ml-2" />
          <h4 className="text-center">Profile</h4>
        </NavLink>
      </div>
      <div className="flex flex-col items-center">
        <NavLink to="/swipe" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>
          <FaArrowsAltH size={30} className="ml-1" />
          <h4 className="text-center">Swipe</h4>
        </NavLink>
      </div>
      <div className="flex flex-col items-center">
        <NavLink to="/cookbook" className={({ isActive }) => isActive ? 'underline font-bold' : ''}>
          <FaBook size={30} className="ml-5" />
          <h4 className="text-center">Cookbook</h4>
        </NavLink>
      </div>
    </nav>
  );
}
