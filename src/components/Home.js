import React, {useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMagnifyingGlass, faCamera, faHashtag, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from '@emailjs/browser';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import m82Image from '../assets/M82.jpg';
import jijiImage from '../assets/jiji.JPG';
import naotoImage from '../assets/naoto.jpg';
import cynthiaImage from '../assets/cynthia.JPG';
import spice from '../assets/spice.jpg';


const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ],
    className: "center",
    centerMode: false,
    centerPadding: "0px",
};

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const scrollSections = [
    {
        title: "Discovery & Strategy – Understanding Your Business",
        description: "We start with a conversation to learn about your business, goals, audience, and any constraints you may have.",
        whatWeOffer: "Your business deserves more than a template. We design bespoke websites that reflect your brand, goals, and audience—no cookie-cutter solutions here!",
        whyItMatters: "Stand out from competitors with unique features and a professional, polished look designed specifically for your needs.",
        steps: ["✅ Define project scope and objectives", "✅ Identify key business challenges and needs", "✅ Discuss budget, timeline, and requirements"],
        image: jijiImage
    },
    {
        title: "Design & Planning – Crafting Your Vision",
        description: "We create a strategic plan and design mockups based on your goals and brand identity.",
        whatWeOffer: "",
        whyItMatters: "",
        steps: ["✅ Create a detailed design plan", "✅ Develop mockups and prototypes", "✅ Get your approval"],
        image: naotoImage
    },
    {
        title: "Development & Implementation – Bringing It to Life",
        description: "Once the design is approved, we turn it into a fully functional website with smooth navigation and optimized performance.",
        whatWeOffer: "From design to launch (and beyond), we handle it all: hosting, updates, maintenance, and support.",
        whyItMatters: "Skip the learning curve and let us take care of the tech, so you can focus on running your business.",
        steps: ["✅ Develop a functional website", "✅ Implement SEO best practices", "✅ Test and refine"],
        image: cynthiaImage
    },
    {
        title: "Launch & Support – Go Live with Confidence",
        description: " We finalize your website, deploy it, and provide ongoing support to keep it running smoothly.",
        whatWeOffer: "From design to launch (and beyond), we handle it all: hosting, updates, maintenance, and support.",
        whyItMatters: "Skip the learning curve and let us take care of the tech, so you can focus on running your business.",
        steps: ["✅ Finalize your website", "✅ Deploy it", "✅ Provide ongoing support"],
        image: cynthiaImage
    }
  ];
  // Update the scroll handler
  useEffect(() => {
    const handleScroll = () => {
        const scrollSection = document.querySelector('.sticky-scroll-section');
        const contentBlocks = document.querySelectorAll('.content-block');
        const stickySection = document.querySelector('.sticky-side');
        
        if (scrollSection && contentBlocks.length && stickySection) {
            const sectionRect = scrollSection.getBoundingClientRect();
            const sectionTop = scrollSection.offsetTop;
            const sectionBottom = sectionTop + scrollSection.offsetHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            // Control sticky behavior
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                stickySection.style.position = 'fixed';
                stickySection.style.top = '0';
                stickySection.style.right = '0';
                stickySection.style.width = '50%';
            } else if (scrollPosition < sectionTop) {
                stickySection.style.position = 'absolute';
                stickySection.style.top = '0';
            } else {
                stickySection.style.position = 'absolute';
                stickySection.style.top = `${scrollSection.offsetHeight - window.innerHeight}px`;
            }
            
            // Determine active content block
            contentBlocks.forEach((block, index) => {
                const rect = block.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
                    setActiveIndex(index);
                }
            });
        }
    };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'YOUR_SERVICE_ID', // from EmailJS
            'YOUR_TEMPLATE_ID', // from EmailJS
            form.current,
            'YOUR_PUBLIC_KEY' // from EmailJS
        )
        .then((result) => {
            console.log('Email sent successfully');
            // Clear form or show success message
        }, (error) => {
            console.log('Failed to send email:', error);
            // Show error message
        });
    };

  return (
    <div>
 
        <div className="home-container">
          <section className="hero-section">
            {/* <div className="hero-container"> */}
              <div className="hero-content">
                  {/* <h1>Grow your business online</h1> */}
                  <h1>Your Business Is <span className="highlight">Unique.</span> Your Website Should Be Too.</h1>
                  {/* <p className="hero-subtitle">Professional web solutions powered by modern technology</p> */}
                  <p className="hero-subtitle">Your business deserves more than a template. We focus on helping small businesses create custom websites that reflect their unique brand and grow with them—while taking the technical stress off their plate.</p>
                  <button className="cta-button">Get Started</button>
              </div>
              {/* <div className="hero-image">
                <img src={spice} alt="Hero Image" />
              </div> */}
            {/* </div> */}
          </section>
            <main>
                <section className="who-we-are"> {/* Now why you need a website */}
                    <div className="section-content">
                        {/* <h2>Take your business further.</h2> */}
                        <h2>Why you need a website.</h2>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-header">
                                    <div className="vertical-accent"></div>
                                    <h3>
                                      <CountUp
                                          end={85}
                                          suffix="%"
                                          duration={2.5}
                                          decimals={0}
                                      >
                                          {({ countUpRef, start }) => (
                                              <VisibilitySensor onChange={start} delayedCall>
                                                  <span ref={countUpRef} />
                                              </VisibilitySensor>
                                          )}
                                      </CountUp>
                                    </h3>
                                </div>
                                <p>"Percentage of consumers that search online before visiting a business. No website? No visibility."</p>
                                <p>- Digital Silk</p>
                            </div>
                            <div className="stat-item">
                                <div className="stat-header">
                                    <div className="vertical-accent"></div>
                                    <h3>
                                      <CountUp
                                          end={50}
                                          suffix="%"
                                          duration={2}
                                          decimals={0}
                                      >
                                          {({ countUpRef, start }) => (
                                              <VisibilitySensor onChange={start} delayedCall>
                                                  <span ref={countUpRef} />
                                              </VisibilitySensor>
                                          )}
                                      </CountUp>
                                    </h3>
                                </div>
                                <p>"50% of consumers say that their impression of a business depends on the company’s website design."</p>
                                <p>- WEBFX</p>
                            </div>
                            <div className="stat-item">
                                <div className="stat-header">
                                    <div className="vertical-accent"></div>
                                    <h3>
                                      <CountUp
                                          end={906500000}
                                          duration={2.75}
                                          separator=","
                                          prefix=""
                                      >
                                          {({ countUpRef, start }) => (
                                              <VisibilitySensor onChange={start} delayedCall>
                                                  <span ref={countUpRef} />
                                              </VisibilitySensor>
                                          )}
                                      </CountUp>
                                    </h3>
                                </div>
                                <p> As of 2024, approximately 1.1 billion websites exist, with around 193.5 million active sites, highlighting the vast digital landscape businesses operate within." That's over 906 million sites that gets neglected. Businesses must work harder to stand out, attract visitors, and retain their attention.</p>
                                <p>- DiviFlash</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="services">
                {/* <div className="blur-circle blur-circle-1"></div>
                <div className="blur-circle blur-circle-2"></div> */}
                 <div className="background-blur">
                    <div className="blur-circle blur-circle-1"></div>
                    <div className="blur-circle blur-circle-2"></div>
                </div>
                    <div className="section-content">
                        <div>
                          <h2>A better business starts with the <span>right upgrades.</span></h2>
                          {/* <p>We start by listening to your needs to build a <b>custom webste</b>that aligns with your goals. From social media setup to stunning visuals and SEO optimization, we help you stand out online. Plus, our ongoing support keeps your site secure and running smoothly.</p> */}
                        </div>
                        <div className="services-grid mobile-only">
                            <div className="service-card">
                                <i className="fas fa-laptop-code"></i>
                                <h3 className="service-span">Website Design & Development</h3>
                                <p>We’ll start with a conversation to understand your business and create a custom website that aligns with your goals</p>
                            </div>
                            <div className="service-card">
                                <i className="fas fa-share-nodes"></i>
                                <h3 className="service-span">Social Media Setup</h3>
                                <p>We’ll help you establish a social media presence - Instagram, Facebook, and more</p>
                            </div>
                            <div className="service-card">
                                <i className="fas fa-camera"></i>
                                <h3>Photography & Content</h3>
                                <p>We’ll work with you to take pictures and create stunning visuals that reflect your brand’s identity</p>
                            </div>
                            <div className="service-card">
                                <i className="fas fa-wrench"></i>
                                <h3>Maintenance & Support</h3>
                                <p>We’ll handle all updates, security, and ongoing support, so your website stays optimized, secure, and aligned with your evolving business needs.</p>
                            </div>
                            <div className="service-card">
                                <i className="fas fa-chart-line"></i>
                                <h3>SEO Optimization</h3>
                                <p>We’ll help you optimize your site for search engines (SEO), helping your attract more visitors.</p>
                            </div>
                        </div>
                  

                    <div className="services-grid desktop-only">
                      <div className="services-row">
                          {/* First row */}
                          <div className="service-card">
                            <FontAwesomeIcon icon={faCode} className="use-case-icon" />
                            <h3 className="service-span">Website Design & Development</h3>
                            <p>We’ll start with a conversation to understand your business and create a custom website that aligns with your goals.</p>
                          </div>
                          <div className="service-card">
                              <i className="fas fa-share-nodes"></i>
                              <h3 className="service-span">Social Media Setup</h3>
                              <p>We’ll help you establish a social media presence - Instagram, Facebook, and more.</p>
                          </div>
                          <div className="service-card">
                              <i className="fas fa-camera"></i>
                              <h3>Photography & Content</h3>
                              <p>We’ll work with you to take pictures and create stunning visuals that reflect your brand’s identity..</p>
                          </div>
                      </div>
                      <div className="services-row">
                          {/* Second row */}
                          <div className="service-card">
                              <i className="fas fa-wrench"></i>
                              <h3>Maintenance & Support</h3>
                              <p>We’ll handle all updates, security, and ongoing support, so your website stays optimized, secure, and aligned with your evolving business needs.</p>
                          </div>
                          <div className="service-card">
                              <i className="fas fa-chart-line"></i>
                              <h3>SEO Optimization</h3>
                              <p>We’ll help you optimize your site for search engines (SEO), helping your attract more visitors.</p>
                          </div>
                      </div>

                  </div>
                  </div>
                </section>

                <section className="use-cases">
                    <div className="section-content">
                        <h2>See <span className="highlight">What’s Possible</span> for Your Business.</h2>
                        <p>We start by listening to your needs to build a <b>custom website</b> that aligns with your goals. From <b>social media setup</b> to <b>photography service</b> and <b>SEO optimization</b>, we help you stand out online. Plus, our ongoing support keeps your site secure and running smoothly.</p>
                        <Slider className="use-cases-slider" {...sliderSettings}>
                          <div className="use-case-card">
                            {/* <div className="use-case-icon">
                                <i className="fas fa-utensils"></i>
                            </div> */}
                                {/* <FontAwesomeIcon icon={faCode} className="use-case-icon" /> */}
                            <h3>Food</h3>
                            <hr></hr>
                            <div className="use-case-content">
                              {/* <ul className="benefits-list">
                                <li><i className="fas fa-check"></i>Online ordering, reservations, and menu management</li>
                                <li><i className="fas fa-check"></i>Attract more diners with SEO and Instagram-worthy visuals</li>
                              </ul> */}
                            </div>
                          </div>
                          <div className="use-case-card">
                                {/* <div className="use-case-icon">
                                    <i className="fas fa-spa"></i>
                                </div> */}
                                {/* <FontAwesomeIcon icon={faHashtag} className="use-case-icon" /> */}
                                <h3>Shopping</h3>
                                <hr></hr>
                                {/* <div className="use-case-content">
                                    <ul className="benefits-list">
                                        <li><i className="fas fa-check"></i>Booking systems, membership management, and gift card sales</li>
                                        <li><i className="fas fa-check"></i>Showcase your services with stunning before-and-after galleries</li>
                                    </ul>
                                </div> */}
                            </div>
                            <div className="use-case-card">
                                {/* <div className="use-case-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div> */}
                                {/* <FontAwesomeIcon icon={faCamera} className="use-case-icon" /> */}
                                <h3>Media</h3>
                                <hr></hr>
                                {/* <div className="use-case-content">
                                  <ul className="benefits-list">
                                  <li><i className="fas fa-check"></i>Affordable, professional online shops</li>
                                  <li><i className="fas fa-check"></i>Manage inventory, payments, and shipping with ease</li>                                    
                                  </ul>
                                </div> */}
                            </div>
                            <div className="use-case-card">
                                {/* <div className="use-case-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div> */}
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="use-case-icon" /> */}
                                <h3>SEO Optimization</h3>
                                <hr></hr>
                                {/* <div className="use-case-content">
                                    <ul className="benefits-list">
                                        <li>Build trust with a sleek, informative website</li>
                                        <li>Generate leads through integrated contact forms</li>
                                    </ul>
                                </div> */}
                            </div>
                            <div className="use-case-card">
                                {/* <div className="use-case-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div> */}
                                {/* <FontAwesomeIcon icon={faScrewdriverWrench} className="use-case-icon"/> */}
                                <h3>Maintenance & Support</h3>
                                <hr></hr>
                                <div className="use-case-content">
                                    {/* <ul className="benefits-list">
                                        <li>Build trust with a sleek, informative website</li>
                                        <li>Generate leads through integrated contact forms</li>
                                    </ul> */}
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>

                <section className="sticky-scroll-section">
                    <div className="scroll-container desktop-only">
                        <div className="content-side">
                            {scrollSections.map((section, index) => (
                                <div key={index} className="content-block">
                                    <h2>{section.title}</h2>
                                    <p>{section.description}</p>
                                    
                                      {section.steps.map((step, index) => (
                                        <span>{step}</span>
                                      ))}
                                    
                                </div>
                            ))}
                        </div>
                        <div className="sticky-side">
                            <div className="vertical-divider"></div>
                              <div className="image-side">
                                {scrollSections.map((section, index) => (
                                    <div 
                                        key={index}
                                        className={`image-block ${index === activeIndex ? 'active' : ''}`}
                                        style={{ 
                                            backgroundImage: `url(${section.image})`,
                                            opacity: index === activeIndex ? 1 : 0
                                        }}
                                    />
                                ))}
                              </div>
                            </div>
                        </div>

                    {/* Mobile version */}
                    <div className="mobile-scroll-container mobile-only">
                        {scrollSections.map((section, index) => (
                            <div key={index} className="mobile-dropdown">
                                <div 
                                    className={`dropdown-header ${openIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <h3>{section.title}</h3>
                                    <i className={`chevron ${openIndex === index ? 'rotated' : ''}`}></i>
                                </div>
                                <div className={`dropdown-content ${openIndex === index ? 'open' : ''}`}>
                                    <p>{section.description}</p>
                                    <div className="dropdown-image">
                                        <img 
                                            src={section.image} 
                                            alt={section.title}
                                            className="mobile-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="contact-preview">
                    <div className="section-content contact-container">
                        <div className="contact-text">
                            <h2>Let's Bring Your Vision to Life</h2>
                            <div className="inline-form-container flex flex-wrap gap-4 items-center p-6 bg-gray-50 rounded-lg">
                              <div className="flex items-center">
                                  <span className="text-gray-600">Hey, my name is</span>
                                  <input 
                                      type="text" 
                                      className="mx-2 px-2 py-1 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none"
                                      placeholder="your name"
                                  />
                              </div>
                              
                              <div className="flex items-center">
                                  <span>and I would love to talk with you about</span>
                                  <div className="select-wrapper">                                
                                    <select className="px-2 py-1 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none">
                                      <option>Website Development</option>
                                          <option>Digital Marketing</option>
                                          <option>Web Development</option>
                                          <option>Design Services</option>
                                          <option>Something else</option>
                                      </select>
                                    <span className="chevron-icon"></span>
                                  </div>
                              </div>
                              <div className="flex items-center">
                                  <span className="text-gray-600">you can reach me at</span>
                                  <input 
                                      type="email" 
                                      className="mx-2 px-2 py-1 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none"
                                      placeholder="your@email.com"
                                  />
                              </div>
                              
                          </div>
 
                           
                        <div className="contact-action">
                            <p>Get a free consultation and quote for your project</p>
                            <Link to="/contact" className="cta-button">Contact Us Now</Link>
                        </div>
                        </div>
                    </div>
                </section>
               
            </main>
        </div>
    </div>
  )
}

export { Home };