import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Popup from '../components/ClickEnlargeFood'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import '/src/styles/Cookbook.css'

function Cookbook() {
  const [isFoodOpen, setIsFoodOpen] = useState(false)
  const [dishes, setDishes] = useState([])
  const [selectedDish, setSelectedDish] = useState(null)
  const [numOfPeople, setNumOfPeople] = useState(1) //Default: 1 person

  useEffect(() => {
    const userId = 'your-user-id' //Replace with user ID

    fetch(`https://azurefoodapi.azurewebsites.net/AllDishesAndUrlsConnectedToUser?userId=${userId}`)
      .then(response => response.json())
      .then(data => setDishes(data.dishViewModels || []))
      .catch(error => console.error('Error fetching dishes:', error))
  }, [])

  const seeFood = (dishName) => {
    const userId = 'your-user-id' //Replace with user ID

    fetch(`https://azurefoodapi.azurewebsites.net/GetIngredientsAndRecipe?dishName=${dishName}&numOfPeople=${numOfPeople}&userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setIngredients(data)
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
    const userId = 'your-user-id' //Replace with user ID

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
      <div className="relative bg-gray-300 border-b border-solid border-black p-5" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <div className="p-5 bg-white border border-solid border-black" style={{ borderRadius: '10%', minWidth: '10%', maxWidth: '100%' }}>
          <Link to='../Profile'>
            <p className='hover:bg-gray-20 md:hover:text-blue-700'>Smakprofil </p>
          </Link>
          <Link to='../Swipe'>
            <p className='hover:bg-gray-20 md:hover:text-blue-700'>Svepa</p>
          </Link>
          <Link to="../Cookbook">
            <p className='hover:bg-gray-20 md:hover:text-blue-700'>Kokbok</p>
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="flex justify-around items-center rt-r-weight-bold">
              Din kokbok - Gillade recept
            </h1>
            <p className='flex justify-around'>
              Klicka på korten för att få en mer detaljerad vy på ditt AI-genererade recept!
            </p>
            <div className="justify-center items-center w-full" style={{ maxWidth: '10%', margin: '0 auto' }}>
              <div className="flex justify-around w-full">
                {/* Swiping right on the Swipe page -> Generate divs akin to below. */}
                {dishes.map(dish => (
                  <div
                    key={dish.dishName}
                    className="p-5 bg-white border border-solid border-black hover:bg-gray-20 md:hover:text-blue-700"
                    style={{ maxWidth: '100%', borderRadius: '5%' }}
                    onClick={() => seeFood(dish.dishName)}
                  >
                    <p>{dish.dishName}</p>
                    <button onClick={(event) => deleteDish(dish.dishName, event)}>Delete</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="numOfPeople" className="mr-2">Number of People:</label>
              <input
                id="numOfPeople"
                type="number"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(e.target.value)}
                className="p-2 border border-solid border-black"
                min="1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup window for liked food. 
      To add in future: connect with specific clicked saved food as a general function.*/}
      <div className="myChosenFood">
        {isFoodOpen && <Popup onClose={noFood} dish={selectedDish} />}
      </div>
      {/* <Popup /> */}
      <Footer />
    </>
  )
}

export default Cookbook