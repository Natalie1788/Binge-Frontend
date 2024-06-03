import { useState } from "react";
import { TiArrowRightOutline, TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const ArrowMenuProfile = () => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <div className="md:flex items-center justify-between w-full h-1/4 sm:hidden px-4">
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text">Profile</h1>
        <p className="text-gray-600 px-1 text-center">
          Fill in your preferences and then swipe on images of dishes based on
          your preferences, and get recipes for the dishes you liked.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/swipe">
          {hover ? (
            <TiArrowRightThick className="text-5xl" onMouseLeave={toggleHover} />
          ) : (
            <TiArrowRightOutline className="text-5xl" onMouseEnter={toggleHover} />
          )}
        </Link>
        <p className="p-3">Back to Swipe</p>
      </div>
    </div>
  );
};

export default ArrowMenuProfile;
