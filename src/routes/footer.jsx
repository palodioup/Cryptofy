import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="fp">
        <p>
          <a href="./home">Home</a>
        </p>
        <p>
          <a href="./about">About</a>
        </p>
        <p>
          <a href="./contacts">Contacts</a>
        </p>
      </div>
      <div className="fp">
        <p>Help</p>
        <p>Socials</p>
        <p>
          &copy; {new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()}
        </p>
      </div>
      <div className="fpa">
        <FaInstagramSquare />
        <FaFacebook />
        <FaTiktok />
      </div>
    </footer>
  );
};

export default Footer;
