import DietPreferencies from "../components/SelectDiet"
import AllergySelection from "../components/SelectAllergy"
// import TagInput from "../components/IngrediensInput"
import { Button } from '@radix-ui/themes';
import Navbar from "../components/Navbar";
import '../styles/App.css'
import { RecipeProvider } from "../hooks/RecipeContext";
import TastePref from "./TastePref";



function Profile() {
 

  return (
    <>
    <RecipeProvider>

    <Navbar/>
 
 <TastePref/>
 
    </RecipeProvider>
 </>
  )
}

export default Profile;
