import { useState } from "react";
import { TiArrowRightOutline, TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const ArrowMenuProfile = () => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((prevHover) => !prevHover);
  };
  return (
    <div className="md:flex items-center justify-end w-full h-1/4 sm:hidden">
      <div className="flex flex-col items-center">
        <Link to="/swipe">
          {hover ? (
            <TiArrowRightThick className="text-5xl" onMouseLeave={toggleHover} />
          ) : (
            <TiArrowRightOutline
              className="text-5xl"
              onMouseEnter={toggleHover}
            />
          )}
        </Link>
        <p className="p-3">Back to Swipe</p>
      </div>
    </div>
  );
};

export default ArrowMenuProfile;
