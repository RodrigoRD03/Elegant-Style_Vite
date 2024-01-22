import React from "react";
import "./Gallery.css";
import image from "../../constants/image";

const Gallery = () => {
  return (
    <section className="app__gallery section-background">
      <div className="app__gallery-title">
        <h1>Gallery</h1>
      </div>
      <div className="app__gallery-group">
        <div className="Img_group-2">
          <div className="app__gallery-photo app__gallery-photo_2">
            <img src={image.Photo2} alt="" />
          </div>
          <div className="app__gallery-photo app__gallery-photo_12">
            <img src={image.Photo12} alt="" />
          </div>
          <div className="Img_group-1">
            <div className="separate">
              <div className="app__gallery-photo app__gallery-photo_7">
                <img src={image.Photo7} alt="" />
              </div>
              <div className="app__gallery-photo app__gallery-photo_13">
                <img src={image.Photo13} alt="" />
              </div>
            </div>
            <div className="separate">
              <div className="app__gallery-photo app__gallery-photo_3">
                <img src={image.Photo3} alt="" />
              </div>
              <div className="app__gallery-photo app__gallery-photo_11">
                <img src={image.Photo11} alt="" />
              </div>
            </div>
          </div>
          <div className="app__gallery-photo app__gallery-photo_4">
            <img src={image.Photo4} alt="" />
          </div>
        </div>
        <div className="Img_group-3">
          <div className="app__gallery-photo app__gallery-photo_1">
            <img src={image.Photo1} alt="" />
          </div>
          <div className="app__gallery-photo app__gallery-photo_5">
            <img src={image.Photo5} alt="" />
          </div>
          <div className="app__gallery-photo app__gallery-photo_14">
            <img src={image.Photo14} alt="" />
          </div>
          <div className="app__gallery-photo app__gallery-photo_9">
            <img src={image.Photo9} alt="" />
          </div>
          <div className="app__gallery-photo app__gallery-photo_6">
            <img src={image.Photo6} alt="" />
          </div>
          <div className="app__gallery-photo app__gallery-photo_8">
            <img src={image.Photo8} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
