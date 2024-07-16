"use strict";

// Returns "About" page HTML
export function aboutPageHTML() {
    const imgSrc = require.context("../assets/images", false, /\.(webp|png|jpg)/);

    return `
        <div class="about-us-content common-width">
            <img class="about-chef-image" src="${imgSrc(`./chef-2.webp`)}" alt="chef image"/>
            <div>
                <h3>Our Mission</h3>
                <p>
                    To provide the best fried rice experience with 
                    fresh ingredients and authentic recipes.
                </p>
            </div>
            <div>
                <h3>Location</h3>
                <p>Find Us At: 123 Flavor Street, Foodie Town, Yumstate, 45678</p>  
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>Phone: (123) 000 1112</p>  
                <p>Email: contact@ricedelightful.com</p>  
            </div>
        </div>
    `;
}
