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
           
           
          
       
            <div className="flex flex-row justify-center gap-8 list-none mt-3 mb-3 ">
          
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Linkdin</a></li>
          
            </div>
            
            
           

        </footer>

    </div>
        )
    
}
export default Footer;