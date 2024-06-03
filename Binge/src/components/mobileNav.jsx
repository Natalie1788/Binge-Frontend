import { FaUser } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MobileNav = () => {

return(


<nav className="bg-white p-5 my-10 border border-solid border-black justify-around w-full bottom-0 sm:flex md:hidden sticky top-0 z-50">
  <div className="flex flex-col items-center">
    <Link to="/profile">
      <FaUser size={30} className="ml-6" />
      <h4 className="text-center"> Smakprofil</h4>
    </Link>
  </div>
  <div className="flex flex-col items-center">
    <Link to="/swipe">
      <FaArrowsAltH size={30} className="ml-2" />
      <h4 className="text-center"> Svepa</h4>
    </Link>
  </div>
  <div className="flex flex-col items-center">
    <Link to="/cookbook">
      <FaBook size={30} className="ml-2" />
      <h4 className="text-center">Kokbok</h4>
    </Link>
  </div>
</nav>
)
}
