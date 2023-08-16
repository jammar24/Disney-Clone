import 'react';
import './styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import logoDsny from '../assets/dny.png'
import ft from '../assets/ft.jpg'
import { useState } from 'react';

const Navbar = () => {
  const { nameUser} = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>      
        <img src= { logoDsny }   className='logop' alt="logo" />
        <ul className={`nav__ln ${isMenuOpen ? 'open' : ''}`}>
            <li className='nav__itm'><i className='bx bxs-home'></i><a href="#">home</a></li>
            <li className='nav__itm' ><i className='bx bx-search'></i><a href="#">search</a></li>
            <li className='nav__itm'  ><i className='bx bx-plus-medical'></i><a href="#">wachtlist</a></li>
            <li className='nav__itm' > <i className='bx bxs-star'></i><a href="#">original</a></li>
            <li className='nav__itm' ><i className='bx bxs-palette'></i><a href="#">movies</a></li>
            <li className='nav__itm' ><i className='bx bxs-briefcase'></i><a href="#">series</a></li>
        </ul>
        <div className='nav__ip'>
        <p className='nav__nameuser'>{ nameUser }</p>
        <img className='nav__ft' src={ft}  alt="foto de auth" />
        </div>
        <div className={`nav__menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}

export default Navbar