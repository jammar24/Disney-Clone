import "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dataMovies from "./helpers/datamovies";
import '../Pages/styles/carouselsecond.css'

const Carouselsecond = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        loop
        items={5}
        autoplay
        autoplayTimeout={15000}
      >
        {dataMovies.map((data) => (
          <>
            <article key={data.imagen} className={` car ${data.imagen}`}>
              <img className="img" src={data.imagen}  /> 
             <button className="list-btn">{data.agregar_a_lista}</button>
            </article>
          </>
        ))}
      </OwlCarousel>
    </>
  );
};

export default Carouselsecond;
