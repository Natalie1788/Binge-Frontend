import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Popup from '../components/ClickEnlargeFood'
import Footer from "../components/Footer"
import { MobileNav } from "../components/mobileNav"
import ArrowMenuCookbook from "../components/ArrowMenuCookbook"
import { TrashIcon } from '@heroicons/react/24/outline'
import '/src/styles/Cookbook.css'

function Cookbook() {
  const [isFoodOpen, setIsFoodOpen] = useState(false)
  const [dishes, setDishes] = useState([])
  const [selectedDish, setSelectedDish] = useState(null)
  const [numOfPeople, setNumOfPeople] = useState(1) //Default: 1 person

  useEffect(() => {
    const userId = localStorage.getItem('userId')

    fetch(`https://azurefoodapi.azurewebsites.net/AllDishesAndUrlsConnectedToUser?userId=${userId}`)
      .then(response => response.json())
      .then(data => setDishes(data.dishViewModels || []))
      .catch(error => console.error('Error fetching dishes:', error))
  }, [])

  const seeFood = (dishName) => {
    const userId = localStorage.getItem('userId')

    fetch(`https://azurefoodapi.azurewebsites.net/GetIngredientsAndRecipe?dishName=${dishName}&numOfPeople=${numOfPeople}&userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched dish data:', data)
        setSelectedDish(data)
        setIsFoodOpen(true)
      })
      .catch(error => console.error('Error fetching ingredients and recipe:', error))
  }

  const noFood = () => {
    setIsFoodOpen(false)
    setSelectedDish(null)
  }

  const deleteDish = (dishName, event) => {
    event.stopPropagation()
    const userId = localStorage.getItem('userId')

    fetch(`https://azurefoodapi.azurewebsites.net/DeleteDish?dishName=${dishName}&userId=${userId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setDishes(dishes.filter(dish => dish.dishName !== dishName))
        } else {
          console.error('Error deleting dish')
        }
      })
      .catch(error => console.error('Error deleting dish:', error))
  }

  return (
    <>
      <Navbar />
      <div className="md:grid md:gap-4 bg-gray-300 p-5 pt-0">

        {/* Toggle button for mobile sidebar */}


        <div className="flex flex-col items-center w-full">
        <ArrowMenuCookbook />
          <h1 className="text md:hidden">Din kokbok - Gillade recept</h1>
          <p className='md:hidden'>Klicka på korten för att få en mer detaljerad vy på ditt AI-genererade recept!</p>

          {/* Grid layout for the dishes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-4">
            {dishes.length > 0 ? (
              dishes.map(dish => (
                <div key={dish.dishName} className="bg-white border border-black rounded-lg p-4" aria-label={`Recipe card for ${dish.dishName}`}>
                  <div className='flex flex-row'>
                    <button onClick={(event) => deleteDish(dish.dishName, event)} className="">
                      <TrashIcon className="h-6 w-auto hover:text-red-500" />
                    </button>
                    <p className='text-center w-full'>{dish.dishName}</p>
                  </div>

                  <p onClick={() => seeFood(dish.dishName)} className="cursor-pointer"></p>

                  <img
                    src={dish.url}
                    alt={dish.dishName}
                    onClick={() => seeFood(dish.dishName)}
                    className="cursor-pointer mt-2 max-h-72 w-full object-cover rounded-lg"
                  />
                </div>
              ))
            ) : (
              <p className="col-span-2 text-center">No liked recipes found.</p>
            )}
          </div>

          {/* Number of people */}
          <div className="mt-4">
            <label htmlFor="numOfPeople" className="mr-2">Number of People:</label>
            <input
              id="numOfPeople"
              type="number"
              value={numOfPeople}
              onChange={(e) => setNumOfPeople(e.target.value)}
              className="p-2 border border-black rounded"
              min="1"
            />
          </div>
        </div>
      </div>

      {/* Popup window for liked food */}
      {isFoodOpen && <Popup onClose={noFood} dish={selectedDish} />}

      <Footer />
      <MobileNav />
    </>
  )
}

export default Cookbook