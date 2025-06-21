import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [ mobileState, setMobileState ] = useState(false)
  const [ menu, setMenu ] = useState(false)
 
  return (
    <header className="header">
      <nav className="headerTitle">
        <h1>Cryptofy</h1>
        <div className="fadiv">
         {mobileState && menu ? <FaTimes onClick={() => {
            setMenu(false)
            setMobileState(false)
         }}/> : <FaBars onClick={() => {
            setMenu(true)
            setMobileState(true)
         }}/>}
        </div>
        <div className={mobileState ? "sidebar" : "header_ul"}>
          <Link to="/home" className="li_ula">Home</Link>
          <Link to="/about" className="li_ula">About</Link>
          <Link to="/contacts" className="li_ula">Contacts</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar