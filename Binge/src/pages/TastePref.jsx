import React, {useState, useEffect} from 'react';
import AllergySelection from "../components/SelectAllergy";
import DietPreferencies from "../components/SelectDiet";
import SideBar from '../components/SideBar';
import Navbar from "../components/Navbar";
import { Button } from '@radix-ui/themes';
import { RecipeProvider, useRecipeContext } from '../hooks/RecipeContext';
import { Link } from "@radix-ui/themes";

function TastePref() {
  const { selectedAllergies, selectedDiets, clearAllergies, addAllergy, clearDiets, addDiet } = useRecipeContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreferences = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://azurefoodapi.azurewebsites.net/GetAllergiesAndDiets?userId=${userId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          clearAllergies();
          clearDiets();
          data.allergies.forEach(allergy => addAllergy(allergy));
          data.diets.forEach(diet => addDiet(diet));
        } else {
          throw new Error('Failed to fetch preferences');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreferences();
  }, [clearAllergies, addAllergy, clearDiets, addDiet]);

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User is not logged in');
      return;
    }

    try {
      const response = await fetch('https://azurefoodapi.azurewebsites.net/PostAllergiesAndDiets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
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

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <RecipeProvider>
      <div className='md:flex justify-center mt-20 gap-10 flex-wrap'>

      <div className="hidden md:block">
    <SideBar/>
    </div>

      <div className='container w-2/5'>
      <h1 className='text-3xl text-teal-700 text-center font-bold'>Smakprofil</h1>
      <p className='mt-4'>Fyll i dina preferenser för att sedan svepa på bilder på maträtter baserat på dina preferenser och då recept på de bildrätter du gillat</p>
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