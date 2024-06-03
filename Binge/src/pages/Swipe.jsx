/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// Icon imports
import { GrRevert } from "react-icons/gr";
import { PiCookingPotFill } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
// Component Imports
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { MobileNav } from "../components/mobileNav";
import ArrowMenuSwipe from "../components/ArrowMenuSwipe";



//Main site component
const Swipe = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <ArrowMenuSwipe  />
      <SwipeCard open={open} setOpen={setOpen}  />
    </>
  );
};

export default Swipe;


//Component  for handling food image and option buttons
const SwipeCard = ({ open, setOpen }) => {
  const [data, setData] = useState([]);  //State to set fetched data from backend
  const [dishIndex, setDishIndex] = useState(0);
  const [loading, setLoading] = useState(false); // State to track loading status
  const likedDishes = [];  
  const [dishCounter, setDishCounter] = useState(0);

  //  Fetch method for obtaining food imgurl and name
  //will only run if user is logged in and has a valid userid
  const fetchData = async () => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No userId found in localStorage");
      setLoading(false);
      return;
    }
// fetches data and saves it to data state
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
  };

  useEffect(() => {
    fetchData();
  }, []); 

  //at 5 swiped dishes, re-fetch 10 dishes
  useEffect(() => {
    if (dishCounter === 5) {
      fetchData();
      setData([]);
      setDishIndex(0);
      setDishCounter(0); // Reset dishCounter after fetching new data
    }
  }, [dishCounter]); // This useEffect triggers when dishCounter changes

  const dishes = data; // No need for unnecessary `dishes` array

  const currentDish = dishes[dishIndex] || {};
  console.log(currentDish);


  //button function when skipping a dish
  const showNext = () => {
    setDishIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      if (nextIndex === data.length) {
        setDishCounter(prevCounter => prevCounter + 1);
        return 0; 
      }
      return nextIndex;
    });
  };

  //button function for returning to last swiped dish
  const showPrevious = () => {
    setDishIndex(Math.max(dishIndex - 1, 0));
  };

  //button function for liking a dish,  checks if userid is valid
  //if valid, posts the dish to the database
  //if not, error message
  const likeDish = async () => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
    if (!userId) {
      console.error("User not found");
      return;
    }

    try {
      const response = await fetch(
        `https://azurefoodapi.azurewebsites.net/SaveDishAndUrl?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dishName: currentDish.key,
            url: currentDish.value,
            userId: userId,
          }),
        }
      );
//error handling
      const responseText = await response.text(); 
      console.log("Response Status:", response.status);
      console.log("Response Text:", responseText);

      if (!response.ok) {
        throw new Error(`Failed to post the liked dish: ${responseText}`);
      }

      if (responseText) {
     
        const result = JSON.parse(responseText); 
        console.log("Dish liked successfully:", result);
      } else {
        console.log("Dish liked successfully, but received an empty response.");
      }
    } catch (error) {
      console.error("Error liking dish:", error);
    }
    likedDishes.push(currentDish); //adds dish to likedDishes array
    setOpen(true); //opens modal
    setDishIndex(dishIndex + 1); //increments dishIndex
    setDishCounter(dishCounter + 1); //increments dishCounter
  };

  //if loading, display loading message
  if (loading) {
    return (
      <div style={{
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        fontSize: '24px', 
        fontWeight: 'bold',
        textAlign: 'center' 
      }}>
        Loading...
      </div>
    );
  }
//returns swipe card component
//175- 183  conditional text on mobile sized device


  return (
    <>
      <div className="flex flex-col items-center  w-full min-h-screen bg-gray-300 ">
        <section className="flex   ">
          <div className="flex-col ">
            <div className=" flex flex-col items-center">

              <h1 className="flex text-emerald-700 font-bold text-4xl  mt-10 mb-3  md:hidden">
                Swipe
              </h1>
              <h3 className="md:hidden px-5">
                The dishes you like and swipe right on, AI creates a recipe for  and saves it in your cookbook.
              </h3>
            </div>
            
            <div
              className="flex-col sm:w-full lg:w-[30rem] h-[24rem] flex sm:flex-col md:flex-col-reverse sm:mt-3 justify-center
             rounded-lg relative overflow-hidden"
            >
          

              <img
                src={currentDish.value}
                alt={currentDish.key}
                className="w-full h-auto object-contain rounded-lg "
                />
                
            </div>
            <h2 className="font-bold text-lg text-center my-2">
              {currentDish.key}
            </h2>

            <div className="flex space-x-10 p-2 justify-center">
              <button
                className="text-3xl hover:text-blue-700"
                onClick={showPrevious}
              >
                <GrRevert />
              </button>
              <button
                className="text-3xl hover:text-red-700"
                onClick={showNext}
              >
                <FaTrashCan />
              </button>
              <button
                className="text-3xl hover:text-emerald-700"
                onClick={likeDish}
              >
                <PiCookingPotFill />
              </button>
            </div>
          </div>
        </section>
        {open && <Modal open={open} onClose={() => setOpen(false)} />}
      </div>

      <div className="fixed bottom-0 w-full">
        <MobileNav />
      </div>
    </>
  );
};

