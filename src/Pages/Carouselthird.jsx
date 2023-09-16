import "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dataSeries from "../helpers/dataseries";
import '../Pages/styles/carouselthird.css'

const Carouselthird = () => {
  return (
    <>
    <div>
      <h2 id="series"> Series </h2>
    </div>
      <OwlCarousel
        className="owl-theme"
        items={6}
        loop
        responsive={{
          0: {
            items: 1, // En pantallas pequeñas, muestra 1 elemento a la vez
          },
          600: {
            items: 3, // En pantallas medianas, muestra 3 elementos a la vez
          },
          1000: {
            items: 6, // En pantallas grandes, muestra 6 elementos a la vez
          },
        }}
        
        margin={37}
     dotsContainer= "false"
        autoplay
        autoplayTimeout={15000}
      >
       
        {dataSeries.map((data) => (
          <>
            <article key={data.imagen} className={` car-uno ${data.imagen}`}>
              <img className="img-uno" src={data.imagen}  /> 
             <button className="list-btn-uno">{data.agregar_a_lista}</button>
            </article>
          </>
        ))}
      </OwlCarousel>
    </>
  )
}

export default Carouselthird