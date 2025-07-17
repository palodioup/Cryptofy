import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"
import Navbar from "./Navbar.jsx";
import coinGecko from "../assets/download.jpg";
import dotCampus from "../assets/images.png";
import Footer from "./footer.jsx";

const Cyrptocurrency = () => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCrypto(data);
        setLoading(false);
        console.log("Loaded data")
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching data, Please check your internet connection");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="animationP">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="animation"
        >
          <rect
            fill="teal"
            stroke="teal"
            strokeWidth="23"
            width="30"
            height="30"
            x="400"
            y="250"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2.5"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </rect>
          <rect
            fill="#4c99b1"
            stroke="#4c99b1"
            strokeWidth="23"
            width="30"
            height="30"
            x="475"
            y="250"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2.5"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </rect>
          <rect
            fill="teal"
            stroke="teal"
            strokeWidth="23"
            width="30"
            height="30"
            x="550"
            y="250"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2.5"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </rect>
        </svg>
      </div>
    );

  return (
    <>
    <Navbar/>
      <div className="parent">
        <div className="title">
          <h1>Get the top 50 crypto here</h1>
          <h1 className="special">Live</h1>
        </div>

        <div className="b">
          <div className="crypto">
            <p className="hash">#</p>
            <p className="Tit">Coin</p>
            <p className="d_name">Name</p>
            <p className="d_price">Price</p>
          </div>
          {crypto.map((coin) => (
            <div key={coin.id}>
              <div className="crypto">
                <p>{coin.market_cap_rank}</p>
                <img src={coin.image} className="c_img" />
                <p className="c_name">{coin.name}</p>
                <p className="c_price">${coin.current_price.toLocaleString('en-US', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1
}               )}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dist">
          <h1>Guess where we got our data from</h1>
          <h3>It's - Coingecko!!!</h3>
          <h3>Vist coingecko now!!!</h3>
        </div>
        <Marquee>
          <span>
            <img src={coinGecko} alt="coinGecko" className="logoImages" />
            <img src={dotCampus} alt="dotCampus" className="logoImages" />
          </span>
        </Marquee>
      </div>
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
            {/* <div className="fpa">
              <FaInstagramSquare />
              <FaFacebook />
              <FaTiktok />
            </div> */}
          </footer>
    </>
  );
};

export default Cyrptocurrency;
