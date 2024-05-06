import "../styles/App.css"
import logo from "../components/BINGE.png"


function Footer(){
    return (
    <div>
        <footer>
            <hr />
            <div className="flex flex-row justify-evenly mt-4 mb-3 ">
            <img  src={logo} alt="" />
          
            </div>
            <div className="flex justify-center">
                <div className="border-b border-black border-solid w-40"></div>
            </div>
           
           
          
       
            <div className="flex flex-row justify-evenly list-none mt-3 mb-3 ">
          
                <li><a href="#">link 1</a></li>
                <li><a href="#">link 2</a></li>
                <li><a href="#">link 3</a></li>
          
            </div>
            
            
           

        </footer>

    </div>
        )
    
}
export default Footer;