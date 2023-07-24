import "react";
import pixar from '../assets/pixar.png';
import disney from '../assets/disney.png';
import marvel  from '../assets/marvelll.png';
import starwars from '../assets/starwars.png';
import natgeo  from '../assets/natgeo.png';
import '../Pages/styles/categories.css'

const Categories = () => {
  return (
    <>
      <div className="container">
        <div className="card disney">
          <img className="vid" src= {disney} alt="disney" />
        </div>

        <div className="card pixar" >
          <img className="vid" src= {pixar} alt="pixar" />
        </div>

        <div className="card marvel">
          <img className="vid"  src= { marvel } alt="marvel" />
        </div>

        <div className="card star">
          <img className="vid" src={starwars} alt="starwars" />
        </div>

        <div className="card natgeo">
          <img className="vid"  src={natgeo} alt="natgeo" />
        </div>
      </div>
    </>
  );
};

export default Categories;
