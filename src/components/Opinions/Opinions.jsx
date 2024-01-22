import React from "react";
import image from "../../constants/image";
import ListOpinions from "../../constants/ListOpinions";
import "./Opinion.css";

const Opinions = () => {
  return (
    <div className="app__Opinions">
      <div className="app__Opinions-title">
        <h1>Opinions</h1>
      </div>
      <div className="app__Opinions-content">
        <div className="app__Opinions-front">
          <div className="app__Opinions-front_img">
            <img src={image.ImgOpinion} alt="" />
          </div>
          <div className="app__Opinions-text">
            <h1>+2500 people have shared their enthusiasm!</h1>
            <p>
              They've recommended our store to friends and family, endorsing the
              quality of our products and customer satisfaction. We're grateful
              for the trust they've placed in us and will continue working hard
              to exceed their expectations in the future."
            </p>
          </div>
        </div>
        <div className="app__Opinions-carrousel" >
          {ListOpinions.ListOpinions.map((item) => (
            <div className="app__Opinions-item" key={item.Name}>
              <h1>"</h1>
              <p>{item.Opinion}</p>
              <div className="app__Opinions-item_person">
                <img src={item.Img} alt="" />
                <p>{item.Name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opinions;
