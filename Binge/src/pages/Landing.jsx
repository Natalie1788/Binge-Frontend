
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Foodr from "../components/Frame 105.png"
import {Link} from "react-router-dom"
import smakProfil from '../components/ProfilLanding.png'
import Swipe from '../components/SwipeLanding.png'
import KokBok from '../components/KokbokLanding.png'
import "../styles/App.css"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <menu >
        <div className=" flex flex-row gap-1 align-content-stretch justify-content-around mb-1">
          <div className="menu">
            <div className="title">
            <h1 className='font-sans font-extrabold text-3xl text mb-16 '>Binge: Din personliga kock med AI-skapade recept</h1>
                <p className='text-xl font-normal'> Välkommen till SwifeChef, där du kan upptäcka, gilla och skapa recept på ett roligt sätt med ett enkelt svep.
              <br /> Svep höger på en maträttsbild du gillar, och låt vår avancerade AI-teknik generera ett skräddarsytt recept som passar dina preferenser. </p>
            </div>
           <div className=' flex gap-10 bg-grey-100 '>
           <Link to="../Swipe">
              <button  className='p-4 w-48 h-16 bg-green-800 text-white hover:bg-green-700 hover:border-green-700 rounded-lg border-2  border-green-800'>Börja din matresa </button>
              </Link>
            <Link to="../SignUp">
                <button className='p-4 w-48 h-16 bg-white-100 rounded-lg border-2 border-grey-500 hover:bg-gray-500 hover:text-white'>Loga In</button>
              </Link>
           </div>  
          </div> 
          <div className="card ml-32">
               <img src={Foodr} alt="Foodr"  className='placeholder'/>
          </div> 
          
        
        </div>
        <div className="arrow-section">
                <div className="arrow"></div>
                <p className="text">Så här går det till</p>
              </div>
        <div className="main">
        <div className="card ml-52">
        <img src={smakProfil}alt="" />
        </div> 
          <div className="menu  mr-64">
           
            <h1 className='font-sans font-extrabold text-3xl '>Skapa en smakprofil</h1>
            <p className='text-xl font-normal'>Skapa  ett konto och din egna smakprofil och låta din matresa börja. <br />
          Få skräddarsydda recept baserad på dina personliga preferenser.</p>
          </div>
         
        </div>
        <div className="main">
          <div  className=" menu">
            <h1 className='font-sans font-extrabold text-3xl'>Börja svepa</h1>
            <p className='text-xl mr-24' >Utforska nya smaker genom att svepa bland inspirerande bilder på maträtter.
               <br />Foodr gör matlagning både enkel och roligt.</p>
          
          </div>
          <div className="card mr-52">
          
            <img src={Swipe}alt="" />
          </div>
        </div>
        <div className="main">
        <div className="card ml-52">
          <img src={KokBok} alt="kokbok" />
        </div>
          <div  className="menu mr-24">
            <h1 className='font-sans font-extrabold text-3xl'>Skapa din egna kokbok</h1>
            <p className='text-xl '>Dina gillade recept sparas på en separat sida och blir din personliga kokbok.
            <br /> Med Foodr kan du enkelt organisera och återuppleva dina favoriträtter när som helst.</p>
          
          </div>
         
        </div>
        <div className='button flex justify-end items-right gap-10 p-4 mr-60 mb-16' >
           <Link to="../Swipe">
              <button  className='p-4 w-48 h-16 bg-green-800 text-white hover:bg-green-700 hover:border-green-700 rounded-lg border-2  border-green-800'>Börja din matresa </button>
              </Link>
            <Link to="../SignUp">
                <button className='p-4 w-48 h-16 bg-white-100 rounded-lg border-2 border-grey-500 hover:bg-gray-500 hover:text-white'>Loga In</button>
              </Link>
        </div>
       
        
      </menu>
      <hr />
      <Footer/>
     
       
    </div>
  )
}

export default Landing;
