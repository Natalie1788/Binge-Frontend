

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'

const Swipe = () => {
  return (
    <>
      <Navbar />

      <SwipeCard />
    </>
  );
}

export default Swipe



const SwipeCard = () => {
  const [data, setData] = useState([]);
  const [dishIndex, setDishIndex] = useState(0);
  const likedDishes = []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/fakeData2.json");
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

  let filters = ["Meat", "Fish"];

  //  filters data based on filters
  const filteredData = data.filter((dish) =>
    dish.mainIngredients.some((ingredient) => filters.includes(ingredient))
  );

  const currentDish = filteredData[dishIndex] || {};
  console.log(currentDish);
  // advance 1 step in array index
  const showNext = () => {
    setDishIndex(dishIndex + 1);
  };
  // Go back one step in array index
  const showPrevious = () => {
    setDishIndex(dishIndex - 1);
  };
  const likeDish = () => {
    likedDishes.push(currentDish)
    localStorage.setItem('jebediah', currentDish)

    console.log('Jebediah', likedDishes)
  }

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

        <section className="flex justify-center items-center h-screen">
          {" "}
          <div className="size-[30rem] border-solid border-black border-8 flex flex-col justify-end bg-white  rounded-lg items-center justify-self-center self-center relative">
            <img
              src={currentDish.imgUrl}
              alt={currentDish.name}
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center mb-12">
              <h2 className="font-bold  text-white text-lg bg-black p-3 mb-5">
                {currentDish.name}
              </h2>

              <div className="flex space-x-7">
                <button className="text-3xl" onClick={showPrevious}>
                  ↩
                </button>
                <button className="text-3xl" onClick={showNext}>
                  ❌
                </button>
                <button className="text-3xl" onClick={likeDish}>🥘</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};