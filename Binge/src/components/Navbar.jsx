
import { Link } from "react-router-dom";
import Foodr from "../img/Foodr.png"

const Navbar = () => {

 

  return (
    <nav className="bg-white border-gray-500 dark:bg-gray-200 ">
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
