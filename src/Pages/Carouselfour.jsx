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
      <h2 id="documental">For You </h2>
    </div>
      <OwlCarousel
        className="owl-theme"
        dotsContainer= "false"
        items={6}
        loop
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