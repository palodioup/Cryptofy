import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

const About = () => {
  return (
    <div className="kjan">
      <Navbar />
        <div className="about_text">
          <h1>
            This website was made to reveal the latest cyrptocurrencies to the
            world live and accurately
          </h1>
        </div>
        <Footer />
    </div>
  );
};

export default About;
