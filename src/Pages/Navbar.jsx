import 'react';
import './styles/navbar.css';
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
  console.log(isMenuOpen)
  return (
    <>  
       <div  onClick={toggleMenu}>
      {
        isMenuOpen ? <h3  className='navbar__x xx'>X</h3> : <img className='navbar__x'      src={logoDsny} alt="logo" />
      }
    </div>
    <nav className={`navbar ${isMenuOpen ? 'navbar-active' : ''}`}> 
     
        <img src= { logoDsny }   className='logop' alt="logo" />
        <ul className= 'nav__ln' >
            <li className='nav__itm'><i className='bx bxs-home'></i><a href="/mon">home</a></li>
            <li className='nav__itm' ><i className='bx bx-search'></i><a href="/mon">search</a></li>
            <li className='nav__itm'  ><i className='bx bx-plus-medical'></i><a href="/mon">wachtlist</a></li>
            <li className='nav__itm' > <i className='bx bxs-star'></i><a href="/mon">original</a></li>
            <li className='nav__itm' ><i className='bx bxs-palette'></i><a href="/mon">movies</a></li>
            <li className='nav__itm' ><i className='bx bxs-briefcase'></i><a href="/mon">series</a></li>
        </ul>
        <div className='nav__ip'>
        <p className='nav__nameuser'>{ nameUser }</p>
        <img className='nav__ft' src={ft}  alt="foto de auth" />
        </div>
        
    </nav>
    </>
  )
}

export default Navbar