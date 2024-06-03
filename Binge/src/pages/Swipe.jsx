/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GrRevert } from "react-icons/gr";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { MobileNav } from "../components/mobileNav";
import ArrowMenuSwipe from "../components/ArrowMenuSwipe";

// localStorage.setItem("userId", "519beb0b-dfe6-4872-b3cc-fc4af27f6091");

const Swipe = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <ArrowMenuSwipe />
      <SwipeCard open={open} setOpen={setOpen} />
    </>
  );
};

export default Swipe;

const SwipeCard = ({ open, setOpen }) => {
  const [data, setData] = useState([]);
  const [dishIndex, setDishIndex] = useState(0);
  const likedDishes = [];
  const [dishCounter, setDishCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
      if (!userId) {
        console.error("No userId found in localStorage");
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
      }
      
    };

    fetchData();
  }, [setData]);

  const dishes = data; // No need for unnecessary `dishes` array

  const currentDish = dishes[dishIndex] || {};
  console.log(currentDish);

  const showNext = () => {
    setDishIndex(dishIndex + 1);

    if (dishIndex === dishes.length - 1) {
      setDishCounter(dishCounter + 1);
      if (dishCounter === 5) {
        // eslint-disable-next-line no-undef
        fetchData();
        setData([]);
        setDishIndex(0);
      }
    }
  };

  const showPrevious = () => {
    setDishIndex(Math.max(dishIndex - 1, 0));
  };

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

      const responseText = await response.text(); // Get response as text
      console.log("Response Status:", response.status);
      console.log("Response Text:", responseText);

      if (!response.ok) {
        throw new Error(`Failed to post the liked dish: ${responseText}`);
      }

      if (responseText) {
        // Check if response text is not empty
        const result = JSON.parse(responseText); // Parse response as JSON
        console.log("Dish liked successfully:", result);
      } else {
        console.log("Dish liked successfully, but received an empty response.");
      }
    } catch (error) {
      console.error("Error liking dish:", error);
    }
    likedDishes.push(currentDish);
    setOpen(true);
    setDishIndex(dishIndex + 1);
    setDishCounter(dishCounter + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
       
        <section className="flex justify-center items-center">
          <div className="flex-col ">
            <div className="flex-col sm:w-full lg:w-[30rem] h-[24rem] flex sm:flex-col md:flex-col-reverse justify-center bg-white  relative overflow-hidden">
              <img
                src={currentDish.value}
                alt={currentDish.key}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
              <h2 className="font-bold text-lg text-center my-2">
                {currentDish.key}
              </h2>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-4 bg-white bg-opacity-75"></div>
            <div className="flex space-x-10 p-2 justify-center">
              <button className="text-3xl" onClick={showPrevious}>
                <GrRevert />
              </button>
              <button className="text-3xl" onClick={showNext}>
                <MdCancel />
              </button>
              <button className="text-3xl" onClick={likeDish}>
                <FaHeart />
              </button>
            </div>
          </div>
        </section>
        {open && <Modal open={open} onClose={() => setOpen(false)} />}

        <MobileNav/>
      </div>
    </>
  );
};
