import React from "react";
import { images } from "../../constants";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="Home" className="space-top"></div>
      <div className="app__home">
        <div className="app__home-texts">
          <div className="app__home-texts--slogan">
            <h1>Where</h1>
            <h1>Style Meets</h1>
            <h1>Elegance.</h1>
          </div>
          <div className="app__home-img_small">
            <img src="https://images.pexels.com/photos/16626202/pexels-photo-16626202/free-photo-of-moda-hombre-rojo-mujer.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
          <div className="app__home-texts--scroll">
            <p>
              Scroll <br /> Down
            </p>
            <div className="app__home-text--icon">
              <lord-icon
                src="https://cdn.lordicon.com/wtfdpwey.json"
                trigger="loop"
                colors="primary:#121331,secondary:#892CDC"
              />
            </div>
            <p>
              Discover The Best <br />
              Style At a Good Price.
            </p>
          </div>
        </div>
        <img className="app__home-img" src={images.img_Home} alt="" />
      </div>
    </>
  );
};

export default Home;
