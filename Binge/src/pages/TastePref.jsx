import React from 'react';
import AllergySelection from "../components/SelectAllergy";
import DietPreferencies from "../components/SelectDiet";
import SideBar from '../components/SideBar';
import { Button } from '@radix-ui/themes';
import { RecipeProvider, useRecipeContext } from '../hooks/RecipeContext';
import { Link } from "@radix-ui/themes";

function TastePref() {
  const { selectedAllergies, selectedDiets } = useRecipeContext();

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://azurefoodapi.azurewebsites.net/PostAllergiesAndDiets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          allergies: selectedAllergies,
          diets: selectedDiets,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from server:", data);
      } else {
        throw new Error('Failed to submit preferences');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <RecipeProvider>
      <div className='flex justify-center mt-20 gap-10 sm:flex-wrap'>
    <SideBar/>

      <div className='container w-2/5'>
      <h1 className='text-3xl text-teal-700 text-center font-bold'>Smakprofil</h1>
      <p className='mt-4'>Fyll i dina preferenser för attsedan svepa på bilder på maträtter baserat på dina preferenser och då recept på de bildrätter du gillat</p>
      <DietPreferencies />
      <AllergySelection />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Button onClick={handleSubmit} color="teal" highContrast size="3" variant="classic">
          <Link style={{color: "white"}} href="/Swipe">Börja svepa</Link>
        </Button>
      </div>
      </div>
      </div>
    </RecipeProvider> 
  );
}

export default TastePref;
