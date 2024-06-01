import React, { createContext, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useLocalStorage([], 'selectedIngredients');
  const [selectedAllergies, setSelectedAllergies] = useLocalStorage([], 'selectedAllergies');
  const [selectedDiets, setSelectedDiets] = useLocalStorage([], 'selectedDiets');
  //const [selectedTastes, setSelectedTastes] = useLocalStorage([], 'selectedTastes');

//ingredients
  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const removeIngredient = (ingredientToRemove) => {
    setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== ingredientToRemove));
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
  };

  //Allergies
  const addAllergy = (allergy) => {
    setSelectedAllergies([...selectedAllergies, allergy]);
  };

  const removeAllergy = (allergyToRemove) => {
    setSelectedAllergies(selectedAllergies.filter((allergy) => allergy !== allergyToRemove));
  };

  const clearAllergies = () => {
    setSelectedAllergies([]);
  };

  //Tastes
  /*const addTaste= (taste) => {
    setSelectedTastes([...selectedTastes, taste]);
  };

  const removeTaste = (tasteToRemove) => {
    setSelectedTastes(selectedTastes.filter((taste) => taste !== tasteToRemove));
  };

  const clearTastes = () => {
    setSelectedTastes([]);
  };*/

  // Diets
  const addDiet= (diet) => {
    setSelectedDiets([...selectedDiets, diet]);
  };

  const removeDiet = (dietToRemove) => {
    setSelectedDiets(selectedDiets.filter((diet) => diet !== dietToRemove));
  };

  const clearDiets = () => {
    setSelectedDiets([]);
  };

  return (
    <RecipeContext.Provider value={{ selectedIngredients, addIngredient, removeIngredient, clearIngredients, selectedAllergies, addAllergy, removeAllergy, clearAllergies, selectedDiets, addDiet, removeDiet, clearDiets }}>
      {children}
    </RecipeContext.Provider>
  );
};