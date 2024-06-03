import { useState } from "react";
import { TiArrowLeftOutline, TiArrowRightOutline, TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";
const ArrowMenuSwipe = () => {
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
        setHover(prevHover => !prevHover);
    }

    return (
      <div className="md:flex items-center justify-between w-full h-1/4  sm:hidden">
        <div className="flex flex-col items-center">
          <Link to="/profile">
            {hover ? (
              <TiArrowLeftThick
                className="text-5xl"
                onMouseLeave={toggleHover}
              />
            ) : (
              <TiArrowLeftOutline
                className="text-5xl"
                onMouseEnter={toggleHover}
              />
            )}
          </Link>
          <p className="p-3">Back to Preferences</p>
        </div>
         <div className="flex flex-col">
          <h1 className="flex text-emerald-700 font-bold text-4xl my-3">
            Swipe
          </h1>
          <h3>
            De rätter du gillar och svepar höger på, skapar AI ett recept för
            och sparar i din kokbok
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/cookbook">
            {hover ? (
              <TiArrowRightThick
                className="text-5xl"
                onMouseLeave={toggleHover}
              />
            ) : (
              <TiArrowRightOutline
                className="text-5xl"
                onMouseEnter={toggleHover}
              />
            )}
          </Link>
          <p className="p-3">Go to Cookbook</p>
        </div>
      </div>
    );
}

export default ArrowMenuSwipe
