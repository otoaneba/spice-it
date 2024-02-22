import React from "react";

function Home() {
  return (
    <div>
      <head></head>
      <body>
        <div className="home-container">
            <h2 className="header">Work with us and build a scalable digital product for your business.</h2>
            <p className="tagline">Too many people believe that they need to spend more time on research and development before launching their product. We believe that speed and iteration is key: We will help you launch your product as soon as possible and help you with iteration to improve to be scalable and sustainable in the long run.</p>
            <main>
                <div className="testimonial-container">
                    <div className="testimonial-header">
                        <h2>1. Fast Iterations</h2>
                        <p className="testimonial-tagline">Clarify and focus your product to prevent feature crawl from an early stage of your business. We will help you identify your goals and target customers fast.</p>
                    </div>
                    <img className="testimonial-image" src="./assets/iteration-3.gif" alt="Iteration loop"/>
                </div>
                <div className="testimonial-container">
                    <img className="testimonial-image" src="assets/green-cubes.gif" alt="Innovation wave"/>
                    <div >
                        <h2 >2. Innovative Solutions</h2>
                        <p className="testimonial-tagline">Our focus on continuous learning ensures our team delivers innovative, up-to-date solutions in the rapidly changing digital landscape.</p>
                    </div>
                </div>
                <div className="testimonial-container">
                    <div>
                        <h2 >3. Communication and Transparency</h2>
                        <p className="testimonial-tagline">We foster trust and efficient collaborations through our commitment to transparent, cost-effective communication, ensuring clients are informed and receive great value.</p>
                    </div>
                    <img className="testimonial-image" src="assets/connections.gif" alt="Conneting dots"/>
                </div>
            </main>
        </div>
      </body>
    </div>
  )
}

export { Home };