import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faChartColumn, faRobot, faFileLines, faPenNib } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div className="service-container">
        <section className="test">
          <p className="fixed-service-header">Let us&hellip;</p>
          <div className="animated-text">
            <h2 className="rotatingText-adjective">improve</h2>
            <h2 className="rotatingText-adjective">digitalize</h2>
            <h2 className="rotatingText-adjective">perfect</h2>
          </div>
          <p className="fixed-service-header business">your business.</p>
        </section> 
    <main>
      <div className="service-list">
          <article className="article-service">
              <FontAwesomeIcon className="icon-service" icon={faCode}/>
              <h5 className="article-description"><b>Web Development</b></h5>
              <p className="article-details">We can help build a website to provide a digital storefront to showcase products or services, reach a wider audience, and establish credibility in their market.</p>
          </article>
          <article className="service-card">
              <FontAwesomeIcon className="icon-service" icon={faChartColumn}/>
              <h5 className="article-description"><b>IOS Development</b></h5>
              <p className="article-details">Offer your customers with personalized experiences, easy access to services, and efficient communication on Apple devices.</p>
          </article>
          <article className="service-card">
              <FontAwesomeIcon className="icon-service" icon={faChartColumn}/>
              <h5 className="article-description"><b>Analysis and Visualization of Data</b></h5>
              <p className="article-details">Make informed decisions by identifying trends, measuring performance, and revealing insights from complex information in an easily understandable format.</p>
          </article>
          <article className="service-card">
              <FontAwesomeIcon className="icon-service" icon={faRobot}/>
              <h5 className="article-description"><b>Development of Generative AI Solutions</b></h5>
              <p className="article-details">Automate creative processes, generate personalized content, and provide innovative solutions to enhance efficiency and customer experiences.</p>
          </article>
          <article className="service-card">
              <FontAwesomeIcon className="icon-service" icon={faFileLines}/>
              <h5 className="article-description"><b>Documentation Services and Language Translation</b></h5>
              <p className="article-details">We can provide documentation service for your software by ensuring clear, accurate, and user-friendly technical documentation, enhancing product usability and customer satisfaction.</p>
          </article>
          <article className="service-card">
              <FontAwesomeIcon className="icon-service" icon={faPenNib}/>
              <h5 className="article-description"><b>Designing Graphics</b></h5>
              <p className="article-details">Improve your business by improving user interface design and making applications more visually appealing and intuitive, thereby improving user experience and engagement.</p>
          </article>
      </div>
    </main>
</div>
  )
}

export { Services };