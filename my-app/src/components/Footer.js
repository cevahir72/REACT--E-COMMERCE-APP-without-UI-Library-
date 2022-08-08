import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-up">
        <div className="footer-left">
            <h3>OUR ADDRESS:</h3>
            <p>19 Mayis Street <br />
               Kecioren / Ankara TURKEY</p>
            <h3>Phone Number:</h3>
            <p>+90 544 962 23 37</p>
        </div>
        <div className="footer-right">
            <h3>Follow us:</h3>
             <ul className="footer-list">
                <li><a  href="https://www.instagram.com/kelesmevlut71/"><ion-icon size="large" name="logo-instagram"></ion-icon></a></li>
                <li><a href="https://github.com/cevahir72"><ion-icon size="large" name="logo-github"></ion-icon></a></li>
                <li><a href="https://www.linkedin.com/in/mevlut-keles-435607215"><ion-icon size="large" name="logo-linkedin"></ion-icon></a></li>
             </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>@ 2022 .MK STORE</h3>
      </div>
    </div>
  );
};

export default Footer;
