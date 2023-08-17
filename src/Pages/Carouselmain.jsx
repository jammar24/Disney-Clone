import "react";
import "../Pages/styles/carouselmain.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carouselmain = () => {
  const images = [
    "https://imgur.com/aOksKNW.jpg",
    "https://i.imgur.com/q6HEbXF.jpeg",
    "https://i.imgur.com/ye7aJLu.jpeg",
    "https://i.imgur.com/HsMa1tY.jpg",
  ];

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      items={1}
      autoplay
      autoplayTimeout={10000}
    >
      {images.map((image, index) => (
        <div key={index} className="slide__content">
          <img className="slide__img" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Carouselmain;
3;
