import React from "react";
import Navbar from "./Navbar";
import download from "../assets/download.png";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="contacts_parent">
        <div className="s">
          <img src={download} alt="githubImg" className="i" />
          <h3>
            Get me at Github: My username is palodioup
          </h3>
        </div>
        <p>&copy; Oladipupo Nathan Akanji 2025</p>
      </div>
      <Footer/>
    </>
  );
};

export default Contacts;
