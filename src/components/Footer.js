import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (

      <footer class="footer">
        <div class="footer-addr">
          <FontAwesomeIcon className="icon" icon={faPepperHot} />              
          <a class="navbar-brand" href="/">
              Spice IT Global
          </a>
          <a class="footer-btn" href="mailto:spiceitglobal@gmail.com">Email Us</a>   
        </div>
        <address>Gothenburg, Sweden</address>
        <div class="legal">
          <p>&copy; 2024 Spice IT Global. All rights reserved.</p>
        </div>
      </footer>

  )
}

export { Footer };