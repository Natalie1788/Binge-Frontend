import React from 'react'
import Select from 'react-select'
import { useRecipeContext } from '../hooks/RecipeContext';
//import { useState } from 'react'

const allergiesList = [
  { value: 'nötter', label: 'Nötter' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'ägg', label: 'Ägg' },
  { value: 'gluten', label: 'Gluten' },
  { value: 'laktos', label: 'Laktos' },
  { value: 'fruktos', label: 'Fruktos' },
  
]
const isMulti = true;

export default function AllergySelection() {
  const { selectedAllergies, addAllergy, removeAllergy, clearAllergies } = useRecipeContext();

  const getValue = () => {
    return isMulti ? allergiesList.filter(c => selectedAllergies.includes(c.value)) : allergiesList.find(c => c.value === selectedAllergies);
  };

  const onChange = (newValue) => {
    const newAllergies = isMulti ? newValue.map(v => v.value) : newValue.value;
    clearAllergies(); 
    newAllergies.forEach((allergy) => {
      addAllergy(allergy);
    });
  };

  
  return(
    //<div className='container w-2/4 mx-auto mt-12'>
    <div className='mt-8'>
      <h1 className='text-lg'>Allergier</h1>
      <Select
    isMulti
    name="allergiesList"
    options={allergiesList}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
    value={getValue()}
  />
    </div>
  )
}