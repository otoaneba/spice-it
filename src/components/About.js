import React from "react";

import { Profile }  from "./Profile";
import data from "../data";

function About() {
  const profiles = data.map(profile => {
    return (
      <Profile
        name={profile.name}
        title={profile.title}
        link={profile.link}
        imgSrc={profile.imgSrc}
        description={profile.description}
      />
    )
  })
  return (
    <div className="about-container">
        <h2 className="header">Our Mission</h2>
        <p className="tagline">Our mission is to empower small businesses by providing innovative software solutions that streamline their digital transformation and enhance their online presence.</p>
        <div className="manifesto">
            <p className="prefix">About Spice IT Global</p>
            <h1 className="manifesto-title">Manifesto</h1>
            <h3 className="manifesto-tagline">We Add Flavor To Your Business</h3>
            <h5><b>Our Goal</b></h5>
            <p className="manifesto-description">At Spice IT Global, we believe every project deserves its own unique zest. Our goal is to infuse creativity and innovation into every aspect of our services. <br/><br/>We are committed to adding flavor to your projects that will distinguish you, blending technical expertise with a personalized approach to ensure that your business stands out in the digital world. We strive not just to meet your expectations, but to exceed them, bringing a fresh, dynamic energy to your endeavors and transforming challenges into opportunities for growth and success.</p>    
        </div>
        <h1 className="header">The Team</h1>
        <section className="profile-list">
            {profiles}
        </section>
    </div>
  )
}

export { About };