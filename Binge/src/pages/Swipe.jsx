import { useEffect, useState } from 'react';
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
  const [dishCounter, setDishCounter] = useState(0); // Initial dishCounter

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5214/PicturesAndUrls");
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

    fetchData(); // Call the function here
  }, [setData]); // Dependency array to prevent infinite loops

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
    setDishIndex(Math.max(dishIndex - 1, 0)); // Prevent going below 0
  };

  const likeDish = () => {
    likedDishes.push(currentDish);
    localStorage.setItem('jebediah', JSON.stringify(currentDish)); // Store as JSON
    setDishCounter(dishCounter + 1); // Update dishCounter on like

    console.log('Jebediah', likedDishes);
  };

  return (
    <>
      <div className="flex flex-col ">
        <h1 className="flex justify-center font-bold text-4xl mb-6 ">
          Swipa på maträtter
        </h1>

        <div className="flex justify-center items-center flex-col">
          <h3>
            {" "}
            Swipa höger för att favorisera en rätt, och spara den till din
            kokbok.
          </h3>
          <h3>Swipa vänster för att visa nästa rätt.</h3>
          <h3>
            Tryckte fel? Tryck på ↩ knappen för att gå tillbaka till din senaste
            rätt.
          </h3>
        </div>

        <section className="flex justify-center  flex-col items-center h-screen">
          <h2 className="font-bold  text-lg  border-black border-2 p-3 ">
           {currentDish.key}
          </h2>
          <div className="size-[30rem] border-solid border-black border-2 flex flex-col justify-end bg-white rounded-lg items-center justify-self-center self-center relative">
            <img
              src={currentDish.value}
              alt={currentDish.key}
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center mb-12">
              <div className="flex space-x-7">
                <button className="text-3xl" onClick={showPrevious}>
                  ↩
                </button>
                <button className="text-3xl" onClick={showNext}>
                  ❌
                </button>
                <button className="text-3xl" onClick={likeDish}></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
