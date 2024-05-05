
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import "../styles/App.css"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <menu>
        <div className="main">
          <div className="menu">
            <h1>Binge: Din personliga kock med AI-skapade recept</h1>
            <p>tforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <button>Börja din matresa</button>
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
            <h1>Binge: Din personliga kock med AI-skapade recept</h1>
            <p>tforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <button>Börja dinmatresa</button>
          </div>
         
        </div>
        <div className="main">
          <div className="menu">
            <h1>Binge: Din personliga kock med AI-skapade recept</h1>
            <p>tforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <button>Börja dinmatresa</button>
          </div>
          <div className="card">
          
            <input type="text" className='placeholder'  />
          </div>
        </div>
        <div className="main">
        <div className="card">
          
          <input type="text"  className='placeholder' />
        </div>
          <div className="menu">
            <h1>Binge: Din personliga kock med AI-skapade recept</h1>
            <p>tforska en värld av smak och kreativitet med hjälp av avancerad AI-teknik. Binge ger dig skräddarsydda recept som matchar dina smakpreferenser och livsstil</p>
            <button>Börja dinmatresa</button>
          </div>
         
        </div>
       
        
      </menu>
      <hr />
      <Footer/>
     
       
    </div>
  )
}

export default Landing;
