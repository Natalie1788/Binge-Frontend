import React, { useState } from 'react';
import { useRecipeContext } from '../hooks/RecipeContext';


export default function TagInput() {
  const [inputText, setInputText] = useState('');
  const { selectedIngredients, addIngredient, removeIngredient, clearIngredients } = useRecipeContext();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addIngredient(inputText.trim());
      setInputText('');
    }
  };

  const handleAddTags = () => {
    addIngredient(inputText.trim());
    setInputText('');
  };

  const handleRemoveTags = () => {
    clearIngredients();
  };

  return (
    <div className='container w-2/4 mx-auto mt-12'>
      <p className='mb-5'>Ingredienser</p>
      <div className="p-2 flex flex-wrap gap-1">
        {selectedIngredients.map((tag, index) => (
          <span key={index} className="border border-slate-500 border-solid rounded-md bg-gray-300 py-0.5 px-1.5 ">
            {tag}
            <button onClick={() => removeIngredient(tag)}>&times;</button>
          </span>
        ))}
      </div>
      <input className='border border-slate-500 border-solid rounded mt-2.5 '
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
        placeholder="Skriv in ingredienser"
      />
      <button className="border border-slate-500 border-solid rounded-md bg-gray-300 px-1.5 ml-2" onClick={handleAddTags}>Add</button>
      <button className="border border-slate-500 border-solid rounded-md bg-gray-300 px-1.5 ml-2" onClick={handleRemoveTags}>Remove all</button>
    </div>
  );
}


