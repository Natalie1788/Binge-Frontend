import "../styles/App.css";
import Foodr from "../img/Foodr.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
    <div>
        <footer>
            <hr />
            <Link to="/">
             <a href="#" className="flex justify-center mt-8 mb-3 items-center space-x-3 rtl:space-x-reverse">
                 <img src={Foodr} className="h-8" alt="logo" />
             </a>
            </Link>
            <div className="flex justify-center">
                <div className="border-b border-black border-solid w-40 "></div>
            </div>
            <div className="flex flex-row justify-center gap-8 list-none mt-3 mb-3">
                <li><a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3b5998' }} /></a></li>
                <li><a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E4405F' }} /></a></li>
                <li><a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }} /></a></li>
            </div>
        </footer>
    </div>
    );
}
export default Footer;
