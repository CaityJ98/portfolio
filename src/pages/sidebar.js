
import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
// import cslogo from '../../assets/images/cslogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faBookReader, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/cslogo.png';
const Sidebar = () => (
    <div className ="nav-bar">
        <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
           
        </Link>
        <nav>
            <NavLink exact="true" activeclass="active" to="/">
                <FontAwesomeIcon icon={faHome} color="lightgrey" /> 
            </NavLink>

            <NavLink 
            exact="true" 
            activeclass="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="lightgrey" /> 
            </NavLink>
            <NavLink 
            exact="true" 
            activeclass="active" 
            className="portfolio-link" 
            to="/portfolio">
                <FontAwesomeIcon icon={faBookOpen} color="lightgrey" /> 
            </NavLink>

            <NavLink 
            exact="true" 
            activeclass="active" 
            className="contact-link" 
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="lightgrey" /> 
            </NavLink>
        </nav>
        <ul>
            <li>
                <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/caitlyn-schaper-234128141/" >
                <FontAwesomeIcon icon={faLinkedin} color="blue"/>
                </a>
            </li>
            <li>
                <a 
                    target="blank"
                    rel="noreferrer"
                    href="https://github.com/CaityJ98"
                >
                    <FontAwesomeIcon icon={faGithub} color="lightblue"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar