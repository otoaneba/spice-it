import React from "react";

export default function Contact() {
  return (
    <div class="container">
        <div class="grid-even-header">
            <div class="header">
                <h1 class="header">Contact Us To Transform You Business From <span class="span-bland">BLAND</span> to <span class="h1-grand">GRAND</span></h1>
        
            </div>
            <div class="header-sub">
                <h4>Our business hours: 9:00-18:00 CET Monday-Friday | 9:00-17:00 CET on weekends.</h4>        
            </div>
        </div>
        
        <div class="grid-even-columns-article">
            <article class="article">
                <i class="fa fa-regular fa-envelope article-icon p-2"></i>
                <p class="article-description">Prefer to email? Send us an email and we'll get back to you as soon as possible.</p>
                <a class="article-link" href="mailto:spiceitglobalgmail.com">spiceitglobal&#64;gmail.com &nbsp;&nbsp;<i class="fa fa-long-arrow-right article-link-icon"></i></a>
            </article>
            <article class="article">
                <i class="fa fa-solid fa-phone fa-xl article-icon p-2"></i>
                <p class="article-description">Call us on our mobile.</p>
                <a class="article-link" href="tel:+46763465979"><b>Sweden:</b> +46 76 346 5979 &nbsp; <i class="fa fa-long-arrow-right article-link-icon"></i></a> <br/>
                <a class="article-link" href="tel:+16787870981"><b>US:</b> +1 678 787 0981 &nbsp;<i class="fa fa-long-arrow-right article-link-icon"></i></a>
            </article>
            <article class="article">
                <i class="fa fa-solid fa-map-marker article-icon p-2"></i>
                <p class="article-description">If you're close, visit us in person!</p>
                <a class="article-link" href="http://maps.google.com/?q=Götabergsgatan 6B, 411 34 Göteborg">Götabergsgatan 6B, <br/> 411 34 Göteborg &nbsp;<i class="fa fa-long-arrow-right article-link-icon"></i></a>
            </article>
        </div>
    </div>
  )
}