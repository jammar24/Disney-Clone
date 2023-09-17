import  'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Footer from './Footer'
import Carouselmain from './Carouselmain'
import Carouselsecond from './Carouselsecond'
import Carouselthird from './Carouselthird'
import Carouselfour from './Carouselfour'
import'./styles/disney.css'

const Disney = () => {
  return (
    
    <main className='disney__container'>
    <Navbar/>
    <Carouselmain/>
    <Categories/>
    <Carouselfour/>
    <Carouselsecond/>
    <Carouselthird/>
    <Footer/>
    </main>
    
  )
}

export default Disney