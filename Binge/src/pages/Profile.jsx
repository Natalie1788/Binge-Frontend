
import TastePreferencies from "../components/SelectTaste"
import AllergySelection from "../components/SelectAllergy"
import TagInput from "../components/IngrediensInput"
import { Button } from '@radix-ui/themes';
import Navbar from "../components/Navbar";
import '../styles/App.css'



function Profile() {
 

  return (
    <>
    <Navbar/>
 <TastePreferencies/>
 <AllergySelection/>
 <TagInput/>
 <div style={{textAlign: "center", marginTop: "50px"}}>
 <Button color="gray" highContrast size="3" variant="classic">Få ett recept</Button>
 </div>
 </>
  )
}

export default Profile;