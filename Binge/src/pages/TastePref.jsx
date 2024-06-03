import { useState, useEffect } from 'react';
import AllergySelection from "../components/SelectAllergy";
import DietPreferencies from "../components/SelectDiet"
import { Button } from '@radix-ui/themes';
import { useRecipeContext } from '../hooks/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { MobileNav } from "../components/mobileNav"




function TastePref() {
  const navigate = useNavigate();

  const { selectedAllergies, selectedDiets, clearAllergies, addAllergy, clearDiets, } = useRecipeContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreferences = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setLoading(false);
        return;
      }

      // Check if there are already selected allergies or diets
      if (selectedAllergies.length === 0 && selectedDiets.length === 0) {
        console.log('No allergies or diets to fetch');
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
  }, []);

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

    navigate("/Swipe")
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <DietPreferencies />
      <AllergySelection />

      <div style={{ textAlign: "center", marginTop: "50px" }}>

        <Button
          color="gray"
          highContrast
          size="3"
          variant="classic"
          onClick={handleSubmit}
        >
          {" "}
          Få ett recept
        </Button>{" "}

      </div>

      <div className="fixed bottom-0 w-full">
        <MobileNav />
      </div>
    </>
  );
}

export default TastePref;