import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For example, sending to your backend API
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
      // return (
      //   <div className="contact-container">
      //     <h1 className="header">Contact Us To Transform You Business From <span className="span-bland">BLAND</span> to <span className="grand">GRAND</span></h1>
      //     <h4 className="tagline">Our business hours: 9:00-18:00 CET Monday-Friday | 9:00-17:00 CET on weekends.</h4>        
      //     <div className="contact-card-list">
      //         <article className="article">
      //             <FontAwesomeIcon className="icon-contact" icon={faEnvelope} />
      //             <p className="contact-description">Prefer to email? Send us an email and we'll get back to you as soon as possible.</p>
      //             <a className="article-link" href="mailto:spiceitglobalgmail.com">spiceitglobal&#64;gmail.com &nbsp;&nbsp;</a>
      //         </article>
      //         <article className="article">
      //             <FontAwesomeIcon className="icon-contact" icon={faPhone} />
      //             <p className="contact-description">Call us on our mobile.</p>
      //             <a className="article-link" href="tel:+46763465979"><b>Sweden:</b> +46 76 346 5979 &nbsp;</a> <br/>
      //             <a className="article-link" href="tel:+16787870981"><b>US:</b> +1 678 787 0981 &nbsp;</a>
      //         </article>
      //         <article className="article">
      //             <FontAwesomeIcon className="icon-contact" icon={faMapMarked} />
      //             <p className="contact-description">If you're close, visit us in person!</p>
      //             <a className="article-link" href="http://maps.google.com/?q=Götabergsgatan 6B, 411 34 Göteborg">Götabergsgatan 6B, <br/> 411 34 Göteborg &nbsp;</a>
      //         </article>
      //     </div>
      //   </div>
      // )
        <div className="contact-page">
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p className="contact-intro">We'd love to hear about your project. Let's discuss how we can help.</p>
                
                <div className="contact-grid">
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="businessType">Business Type</label>
                                <select
                                    id="businessType"
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a business type</option>
                                    <option value="restaurant">Restaurant</option>
                                    <option value="spa">Spa & Salon</option>
                                    <option value="ecommerce">E-Commerce</option>
                                    <option value="professional">Professional Services</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>
                    
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Get in Touch</h3>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <p>support@spiceitglobal.com</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <p>+46 XX XXX XX XX</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-location-dot"></i>
                                <p>Gothenburg, Sweden<br />(Global services available!)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Contact };