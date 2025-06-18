import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"
import Navbar from "./Navbar.jsx";
import coinGecko from "../assets/download.jpg";
import dotCampus from "../assets/images.png";

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
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching data: Please check your internet connection");
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
            stroke-width="23"
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
            stroke-width="23"
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
            stroke-width="23"
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
          <h1>Get the top 50 cryptocurrencies here</h1>
          <h1 className="special">Live</h1>
        </div>

        <div>
          <div className="crypto_d">
            <p className="d_name">Name</p>
            <p className="d_price">Price</p>
            <p className="d_MarketCap">Market Cap</p>
          </div>
          {crypto.map((coin) => (
            <>
              <li key={coin.id} className="crypto">
                <img src={coin.image} className="c_img" />
                <p className="c_name">{coin.name}</p>
                <p className="c_price">${coin.current_price}</p>
                <p>{coin.market_cap}</p>
              </li>
            </>
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
    </>
  );
};

export default Cyrptocurrency;
