import React from "react";
import { MdLocationPin, MdMarkEmailUnread } from "react-icons/md";
import { FaPhone, FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import Logo_img from "../assets/logo.png";


const Footer = () => {
  return (
    <>
      {/* <div className="copyright">
        Designd and Developed by
        <strong>
          <span>
            <a href="https://www.royalswebtech.com/" target="_blank">
              <i> @ Royals WebTech </i>
            </a>
          </span>
        </strong>
        2024
      </div> */}

<footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
        <img src={Logo_img} width = "100px"/>
          <span class="logo_name">Himalaya Agro</span>
        </div>
        <div class="media-icons">
          <a href="#"><FaWhatsapp className='footer-icon'/></a>
          <a href="#"><FaFacebook  className='footer-icon' /></a>
          <a href="#"><FaInstagram  className='footer-icon' /></a>
          {/* <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a> */}
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Achivements</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Product</li>
          <li><a href="#">Apple</a></li>
          <li><a href="#">Banana</a></li>
          <li><a href="#">Grapes</a></li>
          <li><a href="#">Pineapple</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Fresh Fruits</li>
          <li><a href="#">Cherry</a></li>
          <li><a href="#">Mango</a></li>
          <li><a href="#">Orange</a></li>
          <li><a href="#">Apple</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text"> 
        Designd and Developed by
        <strong>
          <span>
            <a href="https://www.royalswebtech.com/" target="_blank">
              <i> @ Royals WebTech </i>
            </a>
          </span>
        </strong>
        2024
     </span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </>
  );
};

export default Footer;
