import { useState } from 'react'
import { TiArrowLeftOutline, TiArrowLeftThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const ArrowMenuCookbook = () => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((prevHover) => !prevHover);
  };
  return (
    <div className="md:flex items-center justify-between w-full h-1/4  sm:hidden">
      <div className="flex flex-col items-center">
        <Link to="/swipe">
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
        <p className="p-3">Back to Swipe</p>
      </div>

      <div className='flex flex-col items-center w-full'>
        <h1 className="text">Your Cookbook - Liked Recipes</h1>
        <p>Click on the cards to see a more detailed ai-generated recipe!</p>
      </div>
    </div>
  )
}

export default ArrowMenuCookbook
