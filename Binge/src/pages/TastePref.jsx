import AllergySelection from "../components/SelectAllergy"
import DietPreferencies from "../components/SelectDiet";
import { Button } from '@radix-ui/themes';
import { RecipeProvider } from '../hooks/RecipeContext';
import { Link } from "@radix-ui/themes";




function TastePref() {
 

  return (
    <RecipeProvider>
 <DietPreferencies/>
 <AllergySelection/>
 <div style={{textAlign: "center", marginTop: "50px"}}>
 <Button color="gray" highContrast size="3" variant="classic"><Link href="/Swipe">Få ett recept</Link></Button>
 </div>
 </RecipeProvider>
  )
}

export default TastePref;