import React from "react";
import "./About.css";
import image from "../../constants/image";
import { BsPersonCircle, BsHeart, BsPeople } from "react-icons/bs";
import { AiOutlineSwap } from "react-icons/ai";
import { IoFootstepsOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className="app__about">
      <div className="app__about-left">
        <div className="app__about-title">
          <h1>About Us</h1>
        </div>
        <div className="app__about-left_Stylefusion">
          <span>
            <BsPersonCircle />
          </span>
          <div>
            <h4>Stylefusion</h4>
            <p>
              At Elegant Style, we blend elegance with a street-inspired flair,
              creating a unique experience for sneaker enthusiasts. Our passion
              for fashion and sophistication is evident in our exclusive
              selection of footwear, where each pair tells a story of style and
              distinction.
            </p>
          </div>
        </div>
        <div className="app__about-left_Sneakerfusion">
          <span>
            <IoFootstepsOutline />
          </span>
          <div>
            <h4>Sneakerfusion</h4>
            <p>
              Since our inception, we have been dedicated to finding the most
              elegant and cutting-edge sneakers that fit an urban aesthetic.
              Every design we offer has been carefully chosen to stand out on
              the streets and make a statement at more formal events.
            </p>
          </div>
        </div>
      </div>
      <div className="app__about-center">
        <div className="app__about-center_L1">
          <img src={image.TenisL1} alt="" />
        </div>
        <div className="app__about-center_L2">
          <img src={image.TenisL2} alt="" />
        </div>
        <div className="app__about-center_C1">
          <img src={image.TenisC1} alt="" />
        </div>
        <div className="app__about-center_C2">
          <img src={image.TenisC2} alt="" />
        </div>
      </div>
      <div className="app__about-right">
        <div className="app__about-right_Lifestylefusion">
          <span>
            <BsHeart />
          </span>
          <div>
            <div>
              <h4>Lifestylefusion</h4>
              <p>
                Our sneakers are not just a fashion statement; they represent a
                lifestyle. We believe that elegance can transcend traditional
                boundaries, carried with confidence and grace in any setting.
              </p>
            </div>
          </div>
        </div>
        <div className="app__about-right_Diversityfusion">
          <span>
            <BsPeople />
          </span>
          <div>
            <h4>Diversityfusion</h4>
            <p>
              Whether you're looking for a sophisticated touch for your daily
              look or a bold pair for special occasions, at Elegant Style,
              you'll find a diverse collection that embraces the duality between
              urban fashion and elegance.
            </p>
          </div>
        </div>
        <div className="app__about-right_JoinUS">
          <span>
            <AiOutlineSwap />
          </span>
          <div>
            <h4>Join US</h4>
            <p>
              Join us and discover how sneakers can elevate your urban style
              with a touch of sophistication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
