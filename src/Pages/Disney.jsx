import  'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Footer from './Footer'
import Carouselmain from './Carouselmain'
import Carouselsecond from './Carouselsecond'
import Carouselthird from './Carouselthird'

const Disney = () => {
  return (
    <>
    <Navbar/>
    <Carouselmain/>
    <Categories/>
    <Carouselsecond/>
    <Carouselthird/>
    <Footer/>
    </>
  )
}

export default Disney