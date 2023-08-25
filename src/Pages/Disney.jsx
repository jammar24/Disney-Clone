import  'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Footer from './Footer'
import Carouselmain from './Carouselmain'
import Carouselsecond from './Carouselsecond'
import Carouselthird from './Carouselthird'
import Carouselfour from './Carouselfour'

const Disney = () => {
  return (
    <>
    <Navbar/>
    <Carouselmain/>
    <Categories/>
    <Carouselsecond/>
    <Carouselthird/>
    <Carouselfour/>
    <Footer/>
    </>
  )
}

export default Disney