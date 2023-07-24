import 'react';
import './styles/navbar.css';
import logoDsny from '../assets/dny.png'
import ft from '../assets/ft.jpg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src= { logoDsny }   className='logop' alt="logo" />
        <ul  className='nav__ln'>
            <li className='nav__itm'><i className='bx bxs-home'></i><a href="#">home</a></li>
            <li className='nav__itm' ><i className='bx bx-search'></i><a href="#">search</a></li>
            <li className='nav__itm'  ><i className='bx bx-plus-medical'></i><a href="#">wachtlist</a></li>
            <li className='nav__itm' > <i className='bx bxs-star'></i><a href="#">original</a></li>
            <li className='nav__itm' ><i className='bx bxs-palette'></i><a href="#">movies</a></li>
            <li className='nav__itm' ><i className='bx bxs-briefcase'></i><a href="#">series</a></li>
        </ul>
        <div className='nav__ip'>
        <p className='nav__nameuser'>jamcode</p>
        <img className='nav__ft' src={ft}  alt="foto de auth" />
        </div>
    </nav>
  )
}

export default Navbar