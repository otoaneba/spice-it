import React from "react";

export default function About() {
  return (
    <div>
      <div class="grid-even-header">
          <div class="header">
              <h2 class="header-tagline">Our Mission</h2>
          </div>
          <p class="header-description pt-1">Our mission is to empower small businesses by providing innovative software solutions that streamline their digital transformation and enhance their online presence.</p>
      </div>
      <div id="my-element" class="container manifesto d-flex flex-column z-depth-2">
          <p class="prefix pb-1">About Garlic Consulting</p>
          <h1 class="text pb-2">Manifesto</h1>
          <h3 class="secondary-text pb-5">We Add Flavor To Your Projects</h3>
          <h5 class="text">Our Goal</h5>
          <p class="description">At Spice IT Global, we believe every project deserves its own unique zest. Our goal is to infuse creativity and innovation into every aspect of our services. <br/><br/>We are committed to adding flavor to your projects that will distinguish you, blending technical expertise with a personalized approach to ensure that your business stands out in the digital world. We strive not just to meet your expectations, but to exceed them, bringing a fresh, dynamic energy to your endeavors and transforming challenges into opportunities for growth and success.</p>    
      </div>
      <div class="container d-flex align-items-center justify-content-center pt-2 pb-2 mt-5">
          <div class="row">
              <h1 class="header">The Team</h1>
          </div>
      </div>
      <div class="container about-me d-flex flex-row">
          <app-about-me class="about" name="Cynthia" title="@cynthialmy | Co-founder" link="https://cynthialmy.github.io" imgSrc="assets/cynthia.JPG" description="A master of organization, seamlessly managing the intricate aspects of the business with a smile. Her exceptional skill in handling numbers and fine-tuning presentations makes her the backbone of the company, orchestrating success with precision and flair."></app-about-me>
          <app-about-me class="about" name="Naoto" title="@otoaneba | Co-founder" link="https://github.com/otoaneba" imgSrc="assets/naoto.JPG" description="Founded Spice IT Global with a goal of enhancing usability and focusing on user needs. With a passion for helping small businesses, Naoto excels in crafting intuitive, user-friendly software solutions."></app-about-me>
          <app-about-me class="about" name="Jiji" title="Office cat" imgSrc="assets/jiji.JPG" description="Purr-fessional nap expert and unofficial meeting supervisor. Has passion for randomly appearing on video calls."></app-about-me>
      </div>
    </div>
  )
}