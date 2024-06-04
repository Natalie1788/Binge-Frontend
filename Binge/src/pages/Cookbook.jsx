import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Popup from '../components/ClickEnlargeFood'
// import Footer from "../components/Footer"
import { MobileNav } from "../components/mobileNav"
import ArrowMenuCookbook from "../components/ArrowMenuCookbook"
import { TrashIcon } from '@heroicons/react/24/outline'
import '/src/styles/Cookbook.css'

function Cookbook() {
  const [isFoodOpen, setIsFoodOpen] = useState(false)
  const [dishes, setDishes] = useState([])
  const [selectedDish, setSelectedDish] = useState(null)
  const [numOfPeople, setNumOfPeople] = useState(1) // Default: 1 person
  const [loading, setLoading] = useState(true)
  const [popupLoading, setPopupLoading] = useState(false)

  useEffect(() => {
    const userId = localStorage.getItem('userId')

    fetch(`https://azurefoodapi.azurewebsites.net/AllDishesAndUrlsConnectedToUser?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setDishes(data.dishViewModels || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching dishes:', error)
        setLoading(false)
      })
  }, [])

  const seeFood = (dishName) => {
    const userId = localStorage.getItem('userId')
    setPopupLoading(true)

    fetch(`https://azurefoodapi.azurewebsites.net/GetIngredientsAndRecipe?dishName=${dishName}&numOfPeople=${numOfPeople}&userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched dish data:', data) // Add this log to check the fetched data
        // Find the dish from the dishes array to get the image URL
        const dish = dishes.find(d => d.dishName === dishName)
        if (dish) {
          setSelectedDish({ ...data, url: dish.url }) // Include the URL in the selected dish data
        }
        setIsFoodOpen(true)
        setPopupLoading(false)
      })
      .catch(error => {
        console.error('Error fetching ingredients and recipe:', error)
        setPopupLoading(false)
      })
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
      <div className="md:grid md:gap-4 bg-gray-200 p-5 pt-0 min-h-screen">
        <div className="flex flex-col items-center w-full">
          <ArrowMenuCookbook />
          {/* Number of people */}
          <div className="mt-4">
            <label htmlFor="numOfPeople" className="mr-2">Amount of people eating:</label>
            <input
              id="numOfPeople"
              type="number"
              value={numOfPeople}
              onChange={(e) => setNumOfPeople(e.target.value)}
              className="p-2 border border-black rounded"
              min="1"
            />
          </div>
          <h1 className="text md:hidden">Your Cookbook - Liked Recipes</h1>
          <p className='md:hidden'>Click on the cards to see a more detailed ai-generated recipe!</p>

          {/* Display Loading... or the dishes */}
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
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
          )}
        </div>
      </div>

      {/* Popup window for liked food */}
      {popupLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Generating recipe...</p>
          </div>
        </div>
      )}
      {isFoodOpen && !popupLoading && <Popup onClose={noFood} dish={selectedDish} />}

      {/* <Footer /> */}
      <MobileNav />
    </>
  )
}

export default Cookbook
