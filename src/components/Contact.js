import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="header">Contact Us To Transform You Business From <span className="span-bland">BLAND</span> to <span className="grand">GRAND</span></h1>
      <h4 className="tagline">Our business hours: 9:00-18:00 CET Monday-Friday | 9:00-17:00 CET on weekends.</h4>        
      <div className="contact-card-list">
          <article className="article">
              <FontAwesomeIcon className="icon-contact" icon={faEnvelope} />
              <p className="contact-description">Prefer to email? Send us an email and we'll get back to you as soon as possible.</p>
              <a className="article-link" href="mailto:spiceitglobalgmail.com">spiceitglobal&#64;gmail.com &nbsp;&nbsp;</a>
          </article>
          <article className="article">
              <FontAwesomeIcon className="icon-contact" icon={faPhone} />
              <p className="contact-description">Call us on our mobile.</p>
              <a className="article-link" href="tel:+46763465979"><b>Sweden:</b> +46 76 346 5979 &nbsp;</a> <br/>
              <a className="article-link" href="tel:+16787870981"><b>US:</b> +1 678 787 0981 &nbsp;</a>
          </article>
          <article className="article">
              <FontAwesomeIcon className="icon-contact" icon={faMapMarked} />
              <p className="contact-description">If you're close, visit us in person!</p>
              <a className="article-link" href="http://maps.google.com/?q=Götabergsgatan 6B, 411 34 Göteborg">Götabergsgatan 6B, <br/> 411 34 Göteborg &nbsp;</a>
          </article>
      </div>
    </div>
  )
}
export { Contact }