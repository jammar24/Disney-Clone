import "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dataDocumental from "../helpers/datadocumental";
import '../Pages/styles/carouselfour.css'
const Carouselfour = () => {
  return (
    <>
    <div>
      <h2 id="documental"> Recommended For You  </h2>
    </div>
      <OwlCarousel
        className="owl-theme"
        dotsContainer= "false"
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
        autoplay
        autoplayTimeout={15000}
      >
       
        {dataDocumental.map((data) => (
          <>
            <article key={data.imagen} className={` car-two ${data.imagen}`}>
              <img className="img-two" src={data.imagen}  /> 
             <button className="list-btn-two">{data.agregar_a_lista}</button>
            </article>
          </>
        ))}
      </OwlCarousel>
    </>
  )
}

export default Carouselfour