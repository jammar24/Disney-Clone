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
        loop
        items={5}
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