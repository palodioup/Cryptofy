import React from "react";
import Navbar from "./Navbar";
import download from "../assets/download.png";
import Footer from "./footer";
import ContactForm from "./form/form.jsx";

const Contacts = () => {
  return (
    <div className="kjana">
      <Navbar />
      <div className="contacts_parent">
        <div className="s">
          <img src={download} alt="githubImg" className="i" />
          <h3>Get me at Github: My username is palodioup</h3>
        </div>
        <p>&copy; Oladipupo Nathan Akanji 2025</p>
        <p>Email: dipoakanji57@gmail.com</p>
      </div>
      <h2 className="W">Contact us, we'll be happy to hear from you</h2>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contacts;
