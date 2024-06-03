import { useState } from "react";
import { TiArrowLeftOutline, TiArrowRightOutline, TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

// 7-10 && 11-14 states and functions for the arrow changing icons on hover
const ArrowMenuSwipe = () => {
    const [lefthover, setLeftHover] = useState(false);
    const toggleLeftHover = () => {
        setLeftHover(prevLeftHover => !prevLeftHover);
    }
    const [righthover, setRightHover] = useState(false);
    const toggleRightHover = () => {
        setRightHover(prevRightHover => !prevRightHover);
    }
    return (
      <div className="md:flex items-center justify-between w-full h-1/4  sm:hidden bg-gray-300">
        <div className="flex flex-col items-center">
          <Link to="/profile">
            {lefthover ? (
              <TiArrowLeftThick
                className="text-5xl"
                onMouseLeave={toggleLeftHover}
              />
            ) : (
              <TiArrowLeftOutline
                className="text-5xl"
                onMouseEnter={toggleLeftHover}
              />
            )}
          </Link>
          <p className="p-3">Back to Preferences</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="flex text-emerald-700 font-bold text-4xl my-3  ">
            Swipe
          </h1>
          <h3>
            The dishes you like and swipe right on, AI creates a recipe for and
            saves it in your cookbook.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/cookbook">
            {righthover ? (
              <TiArrowRightThick
                className="text-5xl"
                onMouseLeave={toggleRightHover}
              />
            ) : (
              <TiArrowRightOutline
                className="text-5xl"
                onMouseEnter={toggleRightHover}
              />
            )}
          </Link>
          <p className="p-3">Go to Cookbook</p>
        </div>
      </div>
    );
}

export default ArrowMenuSwipe
