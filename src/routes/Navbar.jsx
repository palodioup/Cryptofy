import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="headerTitle">
        <h1>Cryptofy</h1>
        <div className="header_ul">
          <Link to="/home" className="li_ul">Home</Link>
          <Link to="/about" className="li_ul">About</Link>
          <Link to="/contacts" className="li_ul">Contacts</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar