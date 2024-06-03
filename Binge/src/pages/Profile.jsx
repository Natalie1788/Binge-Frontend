
// import TagInput from "../components/IngrediensInput"
import Navbar from "../components/Navbar";
import '../styles/App.css'
import { RecipeProvider } from "../hooks/RecipeContext";
import TastePref from "./TastePref";
import ArrowMenuProfile from "../components/ArrowMenuProfile";



function Profile() {
 

  return (
    <>
    <RecipeProvider>

    <Navbar/>
    <ArrowMenuProfile/>
 
 <TastePref/>

    </RecipeProvider>
 </>
  )
}

export default Profile;
