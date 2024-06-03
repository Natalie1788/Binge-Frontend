import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Foodr from "../img/Frame 105.png"
import { Link } from "react-router-dom"
import smakProfil from '../img/ProfilLanding.png'
import Swipe from '../img/SwipeLanding.png'
import KokBok from '../img/KokbokLanding.png'
import "../styles/App.css"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <menu>
        <div className="flex flex-col md:flex-row gap-4 md:gap-1 align-content-stretch justify-content-around mb-4">
          <div className="menu p-4 md:p-0">
            <div className="title">
              <h1 className='font-sans font-extrabold text-2xl md:text-3xl mb-4 md:mb-16'>Foodr: Din personliga kock med AI-skapade recept</h1>
              <p className='text-lg md:text-xl font-normal'>
                Välkommen till Foodr, där du kan upptäcka, gilla och skapa recept på ett roligt sätt med ett enkelt svep.
                <br /> Svep höger på en maträttsbild du gillar, och låt vår avancerade AI-teknik generera ett skräddarsytt recept som passar dina preferenser.
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-10 bg-grey-100'>
              <Link to="../SignUp">
                <button className='p-4 w-full md:w-48 h-16 bg-green-800 text-white hover:bg-green-700 hover:border-green-700 rounded-lg border-2 border-green-800'>Register</button>
              </Link>
              <Link to="../SignIn">
                <button className='p-4 w-full md:w-48 h-16 bg-white-100 rounded-lg border-2 border-grey-500 hover:bg-gray-400 hover:text-white'>Login</button>
              </Link>
            </div>
          </div>
          <div className="card mx-auto md:ml-32 mt-24 mr-24">
            <img src={Foodr} alt="Foodr" className='w-full md:w-auto' />
          </div>
        </div>
        <div className="arrow-section text-center my-4">
          <div className="arrow"></div>
          <p className="text-lg">Så här går det till</p>
        </div>
        <div className="main flex flex-col md:flex-row gap-4 mb-4">
          <div className="card mx-auto md:ml-52">
            <img src={smakProfil} alt="Smak Profil" className='w-full md:w-auto' />
          </div>
          <div className="menu md:mr-64 p-4 md:p-0 text-center md:text-left">
            <h1 className='font-sans font-extrabold text-2xl md:text-3xl'>Skapa en smakprofil</h1>
            <p className='text-lg md:text-xl font-normal'>
              Skapa ett konto och din egna smakprofil och låta din matresa börja. <br />
              Få skräddarsydda recept baserad på dina personliga preferenser.
            </p>
          </div>
        </div>
        <div className="main flex flex-col md:flex-row gap-4 mb-4">
          <div className="menu p-4 md:p-0 text-center md:text-left">
            <h1 className='font-sans font-extrabold text-2xl md:text-3xl'>Börja svepa</h1>
            <p className='text-lg md:text-xl md:mr-24'>
              Utforska nya smaker genom att svepa bland inspirerande bilder på maträtter.
              <br /> Foodr gör matlagning både enkel och roligt.
            </p>
          </div>
          <div className="card mx-auto md:mr-52">
            <img src={Swipe} alt="Swipe" className='w-full md:w-auto' />
          </div>
        </div>
        <div className="main flex flex-col md:flex-row gap-4 mb-4">
          <div className="card mx-auto md:ml-52">
            <img src={KokBok} alt="Kokbok" className='w-full md:w-auto' />
          </div>
          <div className="menu md:mr-24 p-4 md:p-0 text-center md:text-left">
            <h1 className='font-sans font-extrabold text-2xl md:text-3xl'>Skapa din egna kokbok</h1>
            <p className='text-lg md:text-xl'>
              Dina gillade recept sparas på en separat sida och blir din personliga kokbok.
              <br /> Med Foodr kan du enkelt organisera och återuppleva dina favoriträtter när som helst.
            </p>
          </div>
        </div>
        <div className='button flex flex-col md:flex-row justify-end items-center gap-4 p-4 md:mr-60 mb-16'>
          <Link to="../Swipe">
            <button className='p-4 w-full md:w-48 h-16 bg-green-800 text-white hover:bg-green-700 hover:border-green-700 rounded-lg border-2 border-green-800'>Register</button>
          </Link>
          <Link to="../SignUp">
            <button className='p-4 w-full md:w-48 h-16 bg-white-100 rounded-lg border-2 border-grey-500 hover:bg-gray-400 hover:text-white'>Login</button>
          </Link>
        </div>
      </menu>
      <hr />
      <Footer />
    </div>
  )
}

export default Landing;
