import React from 'react';
import logo from "../../assets/home2/footer-logo.png" 
import call from "../../assets/home2/call.png" 
import location from "../../assets/home2/location.png" 
import gmail from "../../assets/home2/gmail.png" 
import finsta from "../../assets/home2/finsta.png" 
import facebook from "../../assets/home2/f-facebook.png" 
import ftwitter from "../../assets/home2/ftwitter.png" 
import flinkdin from "../../assets/home2/flinkdin.png" 
import fyoutube from "../../assets/home2/fyoutube.png" 
 

const Footer = () => {
    return (
        <div>
    <footer>
  <div className="container">
    <div className="row gy-3">
      <div className="col-lg-3">
        <div className="text-center text-lg-start">
          <a href="/index">
            <img className="img-fluid" src={logo} alt="Logo" />
          </a>
          <p className="mt-3 mb-4">
            It is a long established fact that a reader
            will be distracted by the readable content
            of a page when looking at its layout.
            The point of using Lorem Ipsum.
          </p>
          <div className="footerEnd text-center text-md-start">
            <div className="socialLink d-flex justify-content-center justify-content-md-start align-items-center ">
              <a href="#" className="footer_icon d-block overflow-hidden"><img src={finsta} alt="instagram" /></a>
              <a href="#" className="footer_icon d-block overflow-hidden"><img src={facebook} alt="facebook" /></a>
              <a href="#" className="footer_icon d-block overflow-hidden"><img src={ftwitter} alt="Twitter" /></a>
              <a href="#" className="footer_icon d-block overflow-hidden"><img src={flinkdin} alt="Linkdin" /></a>
              <a href="#" className="footer_icon d-block overflow-hidden"><img src={fyoutube} alt="Youtube" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-1" />
      <div className="col-md-3 col-lg-2">
        <ul className="text-center text-md-start">
          <li>Links</li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Upcoming Events</a></li>
          <li><a href="#">FAQ Question</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col-md-4 col-lg-2">
        <ul className="text-center text-md-start">
          <li>Uselink</li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Pricing Plan</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Instructor</a></li>
          <li><a href="#">Pruchese</a></li>
        </ul>
      </div>
      <div className="col-md-5 col-lg-4">
        <ul className="footerEnd text-center text-md-start">
          <li className="d-block mb-3">Contact Info</li>
          <li>
            <a href="#" className="d-flex flex-lg-row flex-column gap-2 align-items-center"><img src={location} alt="location" /> 275 Quadra Street Victoria <br />
              Road, New York</a>
          </li>
          <li className="d-flex flex-lg-row flex-column align-items-center gap-2">
            <img src={call} alt="call" />
            <div>
              <a href="#">+1 (237) 382-2839</a>
              <a href="#">+1(237) 382-2840</a>
            </div>
          </li>
          <li>
            <a href="#" className="d-flex flex-lg-row flex-column gap-2 align-items-center"> <img src={gmail} alt="gmail" /> youremailaddress@example.com</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="text-center">Copyright 2023 Educare | Developed By Opedia Technologies Limited, All Rights
      Reserved</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;