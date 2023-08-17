import "react";
import "../Pages/styles/carouselmain.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carouselmain = () => {
  const images = [
    "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/slider%203.PNG",
    "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/slider%203.PNG",
    "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/slider%203.PNG",
  ];

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      nav
      items={1}
      autoplay
      autoplayTimeout={6000}
    >
      {images.map((image, index) => (
        <div key={index} className="slide-content">
          <img className="slide__img" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Carouselmain;
3  

































































































