import React from "react";
import image from "../../constants/image";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa6"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="app__Contact">
      <div className="app__Contact-logo">
          <img src={image.Logo} alt="" />
          <p>
            Join us and discover how sneakers can elevate your urban style with
            a touch of sophistication.
          </p>
          <div className="app__Contact-social">
            <span><BsFacebook /></span>
            <span><BsInstagram /></span>
            <span><BsTwitter /></span>
            <span><BsYoutube /></span>
            <span><FaTiktok /></span>
          </div>
      </div>
      <div className="app__Contact-Product">
        <h4>Product</h4>
        <p>- Features</p>
        <p>- Integrations</p>
        <p>- Pricing</p>
        <p>- Changelog</p>
      </div>
      <div className="app__Contact-Company">
        <h4>Company</h4>
        <p>- About Us</p>
        <p>- Blog</p>
        <p>- Careers</p>
        <p>- Costumers</p>
      </div>
      <div className="app__Contact-Quick">
        <h4>QUICK CONTACT</h4>
        <p>+99 690 451 9443</p>
        <p>elegant-style@gmail.com</p>
        <p>Contact Us</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Contact;
