import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Foodr from "../img/Frame 105.png"
import { Link } from "react-router-dom"
import smakProfil from '../img/ProfilLandningEnglish.jpg'
import Swipe from '../img/SwipeLandingEnglish.jpg'
import KokBok from '../img/CookbookLandingEnglish.jpg'
import "../styles/App.css"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <menu>
        <div className="flex flex-col md:flex-row gap-4 md:gap-1 align-content-stretch justify-content-around mb-4">
          <div className="menu p-4 md:p-0">
            <div className="title">
              <h1 className='font-sans font-extrabold text-2xl md:text-3xl mb-4 md:mb-16'>Foodr: Your personal chef <br /> with AI-generated recipes</h1>
              <p className='text-lg md:text-xl font-normal'>
              Welcome to Foodr, where you can discover, like and create recipes in a fun way with a simple swipe. <br />
               Swipe right on a food image you like, and let our advanced AI technology generate a customized recipe that fits your preferences.
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-10 bg-grey-100'>
              <Link to="../SignUp">
                <button className='p-4 w-full md:w-48 h-16 bg-green-800 text-white hover:bg-green-700 hover:border-green-700 rounded-lg border-2 border-green-800'>Create an account</button>
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
          <p className="text-3xl font-extrabold  ">Here’s how it works</p>
        </div>
        <div className="main flex flex-col md:flex-row gap-4 mb-4">
          <div className="card mx-auto md:ml-52">
            <img src={smakProfil} alt="Smak Profil" className='w-full md:w-auto' />
          </div>
          <div className="menu md:mr-64 p-4 md:p-0 text-center md:text-left">
            <h1 className='font-sans font-extrabold text-2xl md:text-3xl'>Create a profile</h1>
            <p className='text-lg md:text-xl font-normal'>
            Create an account and your own profile and let your food journey begin. <br />
            Get customized recipes based on your personal preferences.
            </p>
          </div>
        </div>
        <div className="main flex flex-col md:flex-row gap-4 mb-4">
          <div className="menu p-4 md:p-0 text-center md:text-left">
            <h1 className='font-sans font-extrabold text-2xl md:text-3xl'>Start swiping</h1>
            <p className='text-lg md:text-xl md:mr-24 ' >
            Explore new flavors by swiping through inspiring images of food. <br /> Foodr makes cooking both easy and fun
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
            <h1 className='font-sans font-extrabold text-2xl md:text-3xl'>Create your own cookbook</h1>
            <p className='text-lg md:text-xl'>
            Your liked recipes are saved on a separate page and become your personal cookbook. <br />
            With Foodr, you can easily organize and relive your favorite dishes at any time.

            </p>
          </div>
        </div>
        <div className='button flex flex-col md:flex-row justify-end items-center gap-4 p-4 md:mr-60 mb-16'>
          <Link to="../SignUp">
            <button className='p-4 w-full md:w-48 h-16 bg-green-800 text-white hover:bg-green-700 hover:border-green-700 rounded-lg border-2 border-green-800'>Create an account</button>
          </Link>
          <Link to="../SignIn">
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
