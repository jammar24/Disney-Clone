import 'react'
import { setNameUser } from "../store/slices/userName.Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import Loader from './Loader';

const Home = () => {
    const { nameUser } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setNameUser(e.target.name.value.trim()));
      e.target.name.value = "";
    
     setTimeout(() => {
       navigate("/mon");
     }, 3000);

    };
if( nameUser) {
  return <Loader/>
  
}else{



  return (
    <div className="home">
    <div className="home__container">
      
      
      <form className="home__form" onSubmit={handleSubmit}>
        <input
          className="home__input"
          id="name"
          type="text"
          placeholder="Insert name"
        />
        <button className="home__btn"> Start</button>
      </form>
    </div>
  </div>
);
}
}

export default Home