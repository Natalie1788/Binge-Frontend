
import { Link } from "react-router-dom";
import Foodr from "../img/Foodr.png"

const Navbar = () => {

 

  return (
    <nav className="bg-white dark:bg-gray-200 dark: border-b border-black sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Foodr} className="h-8" alt="logo" />
          </a>
        </Link>
      </div>
    
            
          
 
    </nav>
  );
};

export default Navbar;
