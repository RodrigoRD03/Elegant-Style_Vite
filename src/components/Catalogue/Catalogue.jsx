import React from "react";
import "./Catalogue.css";
import image from "../../constants/image";
import Sneakers from "../../constants/Sneakers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Catalogue = () => {
  const settings = {
    slickSetOption: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="app__Catalogue section-background">
      <div className="app__Catalogue-Top">
        <div className="app__Catalogue-Title">
          <h1>Our Best</h1>
          <h1>Products</h1>
        </div>
        <div className="app__Catalogue-Logos">
          <img className="imgs-logos" src={image.Convers} alt="" />
          <img className="imgs-logos" src={image.Vans} alt="" />
          <img className="imgs-logos" src={image.Puma} alt="" />
          <img className="imgs-logos" src={image.Adidas} alt="" />
          <img className="imgs-logos" src={image.Nike} alt="" />
        </div>
      </div>
      <div className="app__Catalogue-Carrousel">
        <Slider {...settings}>
          {Sneakers.Sneakers.map((item) => (
            <div className={item.Class} key={item.Name}>
              <img className="imgs-Tenis" src={item.Img} alt="Item 1" />
              <div className="carrousel__Tenis">
                <div className="carrousel__Tenis-Info">
                  <p className="Tenis__name">{item.Name}</p>
                  <p className="Tenis__mood">{item.Mood}</p>
                </div>
                <div className="carrousel__Tenis-Color">
                  <span
                    style={{ backgroundColor: item.FirstColor }}
                    className="Tenis-color"
                  ></span>
                  <span
                    style={{ backgroundColor: item.SecondColor }}
                    className="Tenis-color"
                  ></span>
                  <span
                    style={{ backgroundColor: item.ThirdColor }}
                    className="Tenis-color"
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Catalogue;
