import React from 'react';

const Popup = ({ onClose, dish }) => {
    if (!dish) return null; // Return null if no dish is selected

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 absolute" onClick={onClose}>
            <div className="bg-white p-4 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold">{dish.dishName}</h2>
                <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-auto" />
                <p className="mt-2">{dish.description}</p>
                <h3 className="mt-4 text-lg font-semibold">Ingredients:</h3>
                <ul className="list-disc list-inside">
                    {dish.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3 className="mt-4 text-lg font-semibold">Recipe:</h3>
                <p>{dish.recipe}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Popup
