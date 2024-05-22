import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Popup from '../components/ClickEnlargeFood'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import '/src/styles/Cookbook.css'

function Cookbook() {
  const [isFoodOpen, setIsFoodOpen] = useState(false)

  const seeFood = () => {
    setIsFoodOpen(true)
  }

  const noFood = () => {
    setIsFoodOpen(false)
  }

  return (
    <>
      <Navbar />
      { /* Copy+paste the code below as a component with the name "Cookbook" */}
      <div className="flex flex-col p-5 bg-gray-300 border-b border-solid border-black">
        {/* <div className="flex bg-white border border-solid border-black dark:bg-gray-900 dark:text-white">
          <p>Binge Searchbar</p>
        </div> */}
        <h1 className="flex rt-r-weight-bold justify-center">
          Din kokbok - Gillade recept
        </h1>
        <p className='flex justify-center'>
          Klicka på korten för att få en mer detaljerad vy på ditt AI-genererade recept!
        </p>
        <div className="flex my-2">
          {/* Add clickable links to three paragraphs directly below */}
          <div className="bg-white p-5 ml-80 mr-60 border border-solid border-black" style={{ borderRadius: '10%' }}>
            <Link to='../Profile'>
              <p className='hover:bg-gray-20 md:hover:text-blue-700'>Smakprofil</p>
            </Link>
            <Link to='../Swipe'>
              <p className='hover:bg-gray-20 md:hover:text-blue-700'>Svepa</p>
            </Link>
            <Link to="../Cookbook">
              <p className='hover:bg-gray-20 md:hover:text-blue-700'>Kokbok</p>
            </Link>
          </div>
          <div className="flex-1" style={{ maxWidth: '30%' }}>
            <div className="flex justify-evenly">
              {/* Swiping right on the Swipe page -> Generate divs akin to below. */}
              <div className="p-5 bg-white border border-solid border-black hover:bg-gray-20 md:hover:text-blue-700" style={{ maxWidth: '250px', borderRadius: '5%' }} onClick={seeFood}>
                {/* Bild på rätt */}
              </div>
              <div className="p-5 bg-white border border-solid border-black hover:bg-gray-20 md:hover:text-blue-700" style={{ maxWidth: '250px', borderRadius: '5%' }} onClick={seeFood}>
                {/* Bild på rätt */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup window for liked food. 
      To add in future: connect with specific clicked saved food as a general function.*/}
      <div className="myChosenFood">
        {isFoodOpen && <Popup onClose={noFood} />}
      </div>
      {/* <Popup /> */}
      <Footer />
    </>
  )
}

export default Cookbook