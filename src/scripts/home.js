"use strict";

// Returns "Home" page HTML
export function homePageHTML() {
    const imgSrc = require.context("../assets/images", false, /\.webp/);

    return `
        <div class="home-content">
            <div class="home-content-div-1">
                <img class="home-chef-image" src="${imgSrc("./chef-1.webp")}" ait="chef-image" />
            </div>
            <div class="home-content-div-2">
                <p class="home-text-1">Welcome to Rice Delightful!</p>
            </div>
            <div class="home-content-div-3">
                <h2 class="home-text-2">Where Every Grain is a Joy</h2>
            </div>
            <div class="home-content-div-4">
                <p class="home-text-3">
                    Indulge in our perfectly crafted fried rice dishes,
                    made with love and the finest ingredients. From
                    classic favorites to exciting new flavors, each bite
                    is a celebration of taste and tradition. Come and
                    experience the delightful world of rice at Rice Delightful!
                </p>
            </div>
            <div class="home-content-div-5">
                <button id="explore-btn">explore</button>
            </div>
        </div>
    `;
}
