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

/* const [loading, setLoading] = useState(false); 


setLoading(true);

if (!userId) {
  console.error("No userId found in localStorage");
  setLoading(false);
  return;
}

try {
  const url = `https://azurefoodapi.azurewebsites.net/PicturesAndUrls?userId=${userId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const newData = await response.json();
  console.log(newData);
  setData(newData);
} catch (error) {
  console.error("Error fetching data:", error);
} finally {
  setLoading(false);
}


if (loading) {
  return (
    <div style={{
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
      fontSize: '24px', 
      fontWeight: 'bold',
      textAlign: 'center' // Ensures text is centered if it wraps to a new line
    }}>
      Loading...
    </div>
  );
}
 */