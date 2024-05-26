import { useEffect, useState } from 'react';
import {FaHeart } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import { GrRevert } from "react-icons/gr";
import Navbar from '../components/Navbar';

const Swipe = () => {
  return (
    <>
      <Navbar />
      <SwipeCard />
    </>
  );
};

export default Swipe;

const SwipeCard = () => {
  const [data, setData] = useState([]);
  const [dishIndex, setDishIndex] = useState(0);
  const likedDishes = [];
  const [dishCounter, setDishCounter] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://azurefoodapi.azurewebsites.net/PicturesAndUrls"
        );
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
    likedDishes.push(currentDish);
    setDishIndex(dishIndex + 1);
    setDishCounter(dishCounter + 1);

    try {
      const response = await fetch('https://azurefoodapi.azurewebsites.net/SaveDishAndUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentDish.key, currentDish.value)
      });

      if (!response.ok) {
        throw new Error('Failed to post the liked dish');
      }

      const result = await response.json();
      console.log('Dish liked successfully:', result);
    } catch (error) {
      console.error('Error liking dish:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <h1 className="flex justify-center font-bold text-4xl mb-6 ">
          Swipa på maträtter
        </h1>

        <div className="flex justify-center items-center flex-col">
          <h3>
            Swipa höger för att favorisera en rätt, och spara den till din
            kokbok.
          </h3>
          <h3>Swipa vänster för att visa nästa rätt.</h3>
          <h3>
            Tryckte fel? Tryck på ↩ knappen för att gå tillbaka till din senaste
            rätt.
          </h3>
        </div>

        <section className="flex justify-center flex-col items-center h-screen">
          <h2 className="font-bold text-lg border-black border-2 p-3 w-full md:w-[30rem]">
            {currentDish.key}
          </h2>
          <div className="w-full md:w-[30rem] h-[30rem] border-solid border-black border-2 flex flex-col justify-end bg-white rounded-lg items-center justify-self-center self-center relative">
            <img
              src={currentDish.value}
              alt={currentDish.key}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-4 bg-white bg-opacity-75">
              <div className="flex space-x-10 p-2">
                <button className="text-3xl" onClick={showPrevious}>
                  <GrRevert />
                </button>
                <button className="text-3xl" onClick={showNext}>
                  {" "}
                  <MdCancel />
                </button>
                <button className="text-3xl" onClick={likeDish}>
                  {" "}
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
