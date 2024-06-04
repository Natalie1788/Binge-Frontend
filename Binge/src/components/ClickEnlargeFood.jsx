import React from 'react';

const Popup = ({ onClose, dish }) => {
  if (!dish) return null; // Return null if no dish is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={onClose}>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto overflow-y-auto max-h-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">{dish.dishName}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <img src={dish.url} alt={dish.dishName} className="w-full h-auto mt-4 rounded-lg" /> {/* Use the URL from the selected dish */}
        <p className="mt-4 text-gray-700">{dish.description}</p>
        <h3 className="mt-6 text-lg font-semibold">Ingredients:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Recipe:</h3>
        <p className="text-gray-700 mt-2">{dish.recipe}</p>
        <div className="mt-6">
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={onClose}>
            Close
          </button>
        </div>
        {/* Add bottom padding to ensure content is not hidden behind the navbar */}
        <div className="pb-20"></div>
      </div>
    </div>
  )
}

export default Popup
