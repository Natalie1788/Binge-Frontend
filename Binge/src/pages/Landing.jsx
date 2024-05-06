
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

import {Link} from "react-router-dom"
import "../styles/App.css"

const Landing = () => {
  return (
    <div>
      <Navbar />

      {/*     margin-top: 80px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-around;
    align-items: center; */}
      <menu >
        <div className=" flex flex-row gap-1 align-content-stretch justify-content-around mb-1">
          <div className="menu">
            <h1 className='text-xl'>Binge: Din personliga kock med AI-skapade recept</h1>
            <p>Utforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil.</p>
           <div className='flex gap-10 bg-grey-100 '>
            <Link to="../SignUp">
                <button className='p-4 bg-gray-100 rounded-lg border-2 border-gray-400'>Loga In</button>
              </Link>
              <Link to="../SignIn">
              <button  className='p-4 bg-gray-100 rounded-lg border-2 border-gray-400'>Skapa Konto </button>
              </Link>
           </div>
          </div>
          <div className="card">
          
            <input type="text" className='placeholder' />
          </div>
        </div>
        <div className="main">
        <div className="card">
          
          <input type="text" className='placeholder' />
        </div>
          <div className="menu">
            <h1 className='text-xl'>Skapa en smakprofil</h1>
            <p>utforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <Link to ="../Profile" >
            <button className='p-4 bg-gray-100 rounded-lg border-2 border-gray-400'>Skapa en smakprofil</button>
        
            </Link>
          </div>
         
        </div>
        <div className="main">
          <div  className=" menu">
            <h1 className='text-xl'>Börja svepa</h1>
            <p>utforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <Link to ="../Swipe" >
            <button className='p-4 bg-gray-100 rounded-lg border-2 border-gray-400'>Börja svepa</button>
            </Link>
          </div>
          <div className="card">
          
            <input type="text" className='placeholder'  />
          </div>
        </div>
        <div className="main">
        <div className="card">
          
          <input type="text"  className='placeholder' />
        </div>
          <div  className="menu">
            <h1 className='text-xl'>Skapa din egna kokbok</h1>
            <p>tforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <Link to="../Cookbook">
            <button className='p-4 bg-gray-100 rounded-lg border-2 border-gray-400'>Skapa din egna kokbok</button>
            </Link>
          </div>
         
        </div>
       
        
      </menu>
      <hr />
      <Footer/>
     
       
    </div>
  )
}

export default Landing;
