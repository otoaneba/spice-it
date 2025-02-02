import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
      <nav className="navbar">
        <div>
          <FontAwesomeIcon className="icon" icon={faPepperHot} />
          <a className="navbar-brand" href="/spice-it">
            Spice IT Global
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-pages">
            <Link to="/spice-it" className="navbar-link">Home</Link>
            {/* <Link to="/services" className="navbar-link"> Services</Link>
            <Link to="/about" className="navbar-link"> About</Link> */}
            <Link to="/contact" className="navbar-link"> Contact</Link>
          </div>
        </div>
      </nav>
  )
}

export { Navbar };